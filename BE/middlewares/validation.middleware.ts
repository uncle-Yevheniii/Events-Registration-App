import Joi, { type ObjectSchema } from 'joi'
import type { Request, Response, NextFunction } from 'express'

import { Logger } from '#helpers/logger'
import { AboutEventEnum, type IEventInfo, type IParticipantsInfo } from '#models/event.model'

export const validationSchema = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { value, error } = schema.validate(req.body)

        if (error) {
            Logger.error(error)
            return res.status(422).json({ success: false, msg: error.details[0].message })
        }

        req.body = value
        next()
    }
}

export const schema = {
    createEvent: Joi.object<IEventInfo>({
        title: Joi.string().min(6).max(50).required().messages({
            'any.required': 'Title is required',
            'string.min': 'Title must be at least 6 characters long',
            'string.max': 'Title must be at most 50 characters long'
        }),
        description: Joi.string().max(255).required().messages({
            'any.required': 'Description is required',
            'string.max': 'Description must be at most 255 characters long'
        }),
        organizer: Joi.string().min(6).max(25).required().messages({
            'any.required': 'Organizer is required',
            'string.min': 'Organizer must be at least 6 characters long',
            'string.max': 'Organizer must be at most 25 characters long'
        })
    }),

    registerEvent: Joi.object<IParticipantsInfo>({
        fullName: Joi.string().min(6).max(25).required().messages({
            'any.required': 'Full name is required',
            'string.min': 'Full name must be at least 6 characters long',
            'string.max': 'Full name must be at most 25 characters long'
        }),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
            .required()
            .messages({
                'string.email': 'Email must be valid',
                'any.required': 'Email is required'
            }),
        dateOfBirth: Joi.string().required(), //TODO add date validation
        aboutEvent: Joi.string()
            .valid(...Object.values(AboutEventEnum))
            .required()
            .messages({
                'string.valid': 'About event must be one of: Social media, Friends, Found myself',
                'any.required': 'About event is required'
            })
    })
}
