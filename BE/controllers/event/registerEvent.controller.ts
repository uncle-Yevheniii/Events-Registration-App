import mongoose from 'mongoose'
import type { Response, Request } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export default async function currentEventController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { fullName, email, dateOfBirth, aboutEvent } = req.body
        if (!fullName || !email || !dateOfBirth || !aboutEvent) return res.status(400).json({ success: false, msg: 'All fields are required' })
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, msg: 'Invalid event id' })

        const event = await Event.findById(id)
        if (!event) return res.status(404).json({ success: false, msg: 'Event not found' })

        event.eventParticipants.push({
            fullName: fullName,
            email: email,
            dateOfBirth: dateOfBirth,
            aboutEvent: aboutEvent
        })

        await event.save()

        return res.status(201).json({
            success: true,
            msg: 'Register participant successfully',
            event
        })
    } catch (err) {
        Logger.error(err)
        res.status(500).json({ success: false, msg: 'Internal server error' })
    }
}
