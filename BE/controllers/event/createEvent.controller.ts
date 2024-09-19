import mongoose from 'mongoose'

import type { Response, Request } from 'express'

import Event from '#models/event.model'
import { Logger } from '#helpers/logger'

export default async function createEventController(req: Request, res: Response) {
    try {
        const { eventInfo } = req.body

        if (!eventInfo.title || !eventInfo.description || !eventInfo.organizer)
            res.status(400).json({ success: false, msg: 'All fields are required' })

        const newEvent = new Event({
            _id: new mongoose.Types.ObjectId(),
            eventInfo: {
                title: eventInfo.title,
                description: eventInfo.description,
                organizer: eventInfo.organizer
            }
        })

        await newEvent.save()
        return res.status(201).json({
            success: true,
            msg: 'User created successfully',
            newEvent
        })
    } catch (err) {
        Logger.error(err)
        res.status(500).json({ success: false, msg: 'Internal server error' })
    }
}
