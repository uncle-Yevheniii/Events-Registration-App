import axios from 'axios'

import { Values } from '@/types/type'

const URI = 'http://localhost:8080/api/events'

export async function registerEvent(evenId: string, values: Values) {
    const res = await axios.post(`${URI}/register-event/${evenId}`, {
        fullName: values.fullName,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        aboutEvent: values.about
    })
    return res.data
}
