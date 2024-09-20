import axios from 'axios'

const URI = 'http://localhost:8080/api/events'

export async function allEvents(page: number, controller: AbortController) {
    const res = await axios.get(`${URI}/all-events`, { signal: controller.signal, params: { p: page } })
    return res.data
}
