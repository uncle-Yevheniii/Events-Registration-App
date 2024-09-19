import mongoose from 'mongoose'
import type { Response, Request } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export default async function currentEventController(req: Request, res: Response) {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, msg: 'Invalid event id' })
        }

        const event = await Event.findById(id)

        return res.status(200).json({
            success: true,
            msg: 'Get current events successfully',
            event
        })
    } catch (err) {
        Logger.error(err)
        res.status(500).json({ success: false, msg: 'Internal server error' })
    }
}
