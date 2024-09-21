import axios from 'axios'

import { Values } from '@/types/type'

const URI = import.meta.env.MODE === 'development' ? 'http://localhost:8080/api/events' : '/api/events'

export async function registerEvent(evenId: string, values: Values) {
    const res = await axios.post(`${URI}/register-event/${evenId}`, {
        fullName: values.fullName,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        aboutEvent: values.about
    })
    return res.data
}
