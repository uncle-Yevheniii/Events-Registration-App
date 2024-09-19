import mongoose from 'mongoose'
import { Logger } from '#helpers/logger'

const MONGO_PWD = process.env.MONGO_PWD ? process.env.MONGO_PWD : ''
const MONGO_USERNAME = process.env.MONGO_USERNAME ? process.env.MONGO_USERNAME : ''
const MONGO_DB_NAME = process.env.MONGO_DB_NAME ? process.env.MONGO_DB_NAME : ''

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PWD}@events-registration-app.3vdsw.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Events-Registration-App`

export const connectDB = async () => {
    /** Connect to MongoDB **/

    mongoose.Promise = global.Promise
    mongoose
        .connect(MONGO_URI)
        .then((conn) => Logger.info(`MongoDB Connected: ${conn.connection.host}`))
        .catch((error) => {
            Logger.error(error)
            process.exit(1)
        })
}
