import type { Response, Request } from 'express'

import { Logger } from '#helpers/logger'

export default async function currentEventController(req: Request, res: Response) {
    try {
        const { fullName, email, dateOfBirth, aboutEvent } = req.body
        if (!fullName || !email || !dateOfBirth || !aboutEvent) return res.status(400).json({ success: false, msg: 'All fields are required' })

        const { event } = req
        if (!event) return res.status(404).json({ success: false, msg: 'Event not found' })

        event.eventParticipants.push({ fullName, email, dateOfBirth, aboutEvent })
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
