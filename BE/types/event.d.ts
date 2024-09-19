// event.d.ts
import { Request } from 'express'
import { IEventModel } from '#models/event.model'

declare global {
    namespace Express {
        interface Request {
            event?: IEventModel
        }
    }
}
