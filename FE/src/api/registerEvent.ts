import { Values } from '@/types/type'
import axios from 'axios'

const URI = 'http://localhost:8080/api/events'

// !fullName || !email || !dateOfBirth || !aboutEvent
export async function registerEvent(evenId: string, values: Values) {
    console.log(values)
    const res = await axios.post(`${URI}/register-event/${evenId}`, {
        fullName: values.fullName,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        aboutEvent: values.about
    })
    return res.data
}
