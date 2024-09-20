import axios from 'axios'

const URI = 'http://localhost:8080/api/events'

export async function currentEvent(evenId: string, controller: AbortController) {
    const res = await axios.get(`${URI}/current-event/${evenId}`, { signal: controller.signal })
    return res.data
}
