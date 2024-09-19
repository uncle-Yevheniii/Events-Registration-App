import type { Response, Request } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export default async function allEventsController(_: Request, res: Response) {
    try {
        const events = await Event.find()

        return res.status(200).json({
            success: true,
            msg: 'Get all events successfully',
            events
        })
    } catch (err) {
        Logger.error(err)
        res.status(500).json({ success: false, msg: 'Internal server error' })
    }
}
