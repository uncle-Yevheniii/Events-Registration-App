import express from 'express'

import { createEventController } from '#controllers/index'

export const router = express.Router()

router.post('/create-event', createEventController)
