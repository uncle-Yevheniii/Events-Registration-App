import express from 'express'

import { createEvent, allEvents, currentEvent } from '#controllers/index'

export const router = express.Router()

//! NOT PUBLIC ROUTE
router.post('/create-event', createEvent)

//! PUBLIC ROUTE
router.get('/all-events', allEvents)
router.get('/current-event/:id', currentEvent)
