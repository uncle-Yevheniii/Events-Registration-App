export interface Values {
    fullName: string
    email: string
    dateOfBirth: string
    about: AboutEventEnum | ''
}
export enum AboutEventEnum {
    SOCIAL_MEDIA = 'Social media',
    FRIENDS = 'Friends',
    FOUND_MYSELF = 'Found myself'
}
export type IEventInfo = {
    title: string
    description: string
    eventDate: string
    organizer: string
}
export type IParticipantsInfo = {
    fullName: string
    email: string
    dateOfBirth: string
    aboutEvent: AboutEventEnum
}
export interface IEvent {
    _id: string
    createdAt: Date
    updatedAt: Date
    eventInfo: IEventInfo
    eventParticipants: [IParticipantsInfo]
}
