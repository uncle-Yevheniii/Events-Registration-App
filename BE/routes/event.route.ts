import express from 'express'

import { createEventController } from '#controllers/index'

export const router = express.Router()

//! NOT PUBLIC ROUTE
router.post('/create-event', createEventController)
