import express from 'express'

import { createEventController, allEventsController } from '#controllers/index'

export const router = express.Router()

//! NOT PUBLIC ROUTE
router.post('/create-event', createEventController)

//! PUBLIC ROUTE
router.get('/all-events', allEventsController)
