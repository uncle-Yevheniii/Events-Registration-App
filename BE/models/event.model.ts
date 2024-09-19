import mongoose, { Document, Schema } from 'mongoose'

export enum AboutEventEnum {
    SOCIAL_MEDIA = 'Social media',
    FRIENDS = 'Friends',
    FOUND_MYSELF = 'Found myself'
}
export type IEventInfo = {
    title: string
    description: string
    eventDate: Date | string
    organizer: string
}
export type IParticipantsInfo = {
    fullName: string
    email: string
    dateOfBirth: Date | string
    aboutEvent: AboutEventEnum
}

export interface IEvent {
    eventInfo: IEventInfo
    eventParticipants: [IParticipantsInfo]
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
