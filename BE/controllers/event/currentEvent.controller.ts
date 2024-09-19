import type { Response, Request } from 'express'

export default function currentEventController(req: Request, res: Response) {
    const { event } = req
    if (!event) return res.status(404).json({ success: false, msg: 'Event not found' })

    return res.status(200).json({
        success: true,
        msg: 'Get current events successfully',
        event
    })
}
