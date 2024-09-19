import mongoose, { Document, Schema } from 'mongoose'

enum AboutEventEnum {
    SOCIAL_MEDIA = 'Social media',
    FRIENDS = 'Friends',
    FOUND_MYSELF = 'Found myself'
}

export interface IEvent {
    eventInfo: {
        title: string
        description: string
        eventDate: Date | string
        organizer: string
    }
    eventParticipants: [
        {
            fullName: string
            email: string
            dateOfBirth: Date | string
            aboutEvent: AboutEventEnum
        }
    ]
}

export interface IEventModel extends IEvent, Document {
    _id: mongoose.Types.ObjectId
    createdAt: Date
    updatedAt: Date
}

const EventSchema: Schema = new Schema(
    {
        eventInfo: {
            title: { type: String, required: true },
            description: { type: String, required: true },
            organizer: { type: String, required: true },
            eventDate: { type: Date, default: Date.now }
        },
        eventParticipants: [
            {
                fullName: String,
                email: String,
                dateOfBirth: Date,
                aboutEvent: Object.values(AboutEventEnum)
            }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export default mongoose.model<IEventModel>('Events', EventSchema)
