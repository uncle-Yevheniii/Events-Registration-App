import axios from 'axios'

const URI = import.meta.env.MODE === 'development' ? 'http://localhost:8080/api/events' : '/api/events'

export async function allEvents(page: number, controller: AbortController) {
    const res = await axios.get(`${URI}/all-events`, { signal: controller.signal, params: { p: page - 1 } })
    return res.data
}
