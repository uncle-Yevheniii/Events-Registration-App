import type { Response, Request } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export default async function allEventsController(req: Request, res: Response) {
    try {
        const page = Number(req.query.p) || 0
        const eventPerPage = 6

        const events = await Event.find()
            .skip(page * eventPerPage)
            .limit(eventPerPage)

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
