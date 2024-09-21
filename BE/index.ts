import http from 'http'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import express, { type Request, type Response } from 'express'

import { connectDB } from '#db/connect'
import { Logger } from '#helpers/logger'
import { router as eventRouter } from '#routes/event.route'

const __dirname = path.resolve()
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))

/** Ping Server **/
app.get('/health', (_: Request, res: Response) => res.status(200).json({ success: true, msg: 'Server is up and running' }))

/** Routes **/
const prefix = '/api'
app.use(`${prefix}/events`, eventRouter)

app.all('*', (_: Request, res: Response) => res.status(404).json({ success: false, msg: 'Page not found' }))

/** Start Server **/
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

http.createServer(app).listen(PORT, () => {
    connectDB()
    Logger.info(`Server is listening on port ${PORT}`)
})
/** Static Server **/
if (process.env.NODE_ENV === 'production') {
    app.use(
        express.static(path.join(__dirname, '/FE/dist'), {
            etag: false, // Вимикаємо ETag
            maxAge: '0', // Вимикаємо кешування
            setHeaders: (res, _path) => {
                res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
                res.setHeader('Pragma', 'no-cache')
                res.setHeader('Expires', '0')
            }
        })
    )

    app.get('*', (_: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '/FE', 'dist', 'index.html'))
    })
}
