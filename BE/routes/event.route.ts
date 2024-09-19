import express from 'express'

import { checkEvent } from '#middlewares/event.middleware'
import { createEvent, allEvents, currentEvent, registerEvent } from '#controllers/index'
import { schema, validationSchema } from '#middlewares/validation.middleware.js'

export const router = express.Router()

//! NOT PUBLIC ROUTE
router.post('/create-event', validationSchema(schema.createEvent), createEvent)

//! PUBLIC ROUTE
router.get('/all-events', allEvents)
router.get('/current-event/:id', checkEvent, currentEvent)
router.post('/register-event/:id', checkEvent, validationSchema(schema.registerEvent), registerEvent)
