import mongoose from 'mongoose'
import type { Request, Response, NextFunction } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export async function checkEvent(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, msg: 'Invalid event id' })

        const event = await Event.findById(id)
        if (!event) return res.status(404).json({ success: false, msg: 'Event not found' })

        req.event = event
        return next()
    } catch (err) {
        Logger.error(err)
        res.status(500).json({ success: false, msg: 'Internal server error' })
    }
}
