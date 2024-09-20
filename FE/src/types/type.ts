export enum AboutEventEnum {
    SOCIAL_MEDIA = 'Social media',
    FRIENDS = 'Friends',
    FOUND_MYSELF = 'Found myself'
}

export interface Values {
    fullName: string
    email: string
    dateOfBirth: string
    about: AboutEventEnum | ''
}
