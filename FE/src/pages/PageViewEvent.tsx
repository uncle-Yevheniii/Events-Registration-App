import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { IParticipantsInfo } from '@/types/type'
import { CurrentEventsListItem } from '@/components'
import { currentEvent } from '@/api/currentEvent.api'

export default function ViewEventPage() {
    const [data, setData] = useState<IParticipantsInfo[]>([]) //TODO: type ✔
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const { evenId } = useParams()

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = () => {
            setLoading(true)
            currentEvent(evenId ?? '', controller)
                .then((res) => {
                    setData(res.event.eventParticipants)
                })
                .catch((err) => (err.code !== 'ERR_CANCELED' ? setError(true) : setError(false)))
                .finally(() => setLoading(false))
        }
        fetchData()

        return () => controller.abort()
    }, [evenId])

    return (
        <div>
            <h2>"Awesome Event" participants</h2>
            {error && <p>Something went wrong</p>}
            {loading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                <div>
                    <div>
                        <Link to="/events">Back to events</Link>
                        <Link to={`/register-event/${evenId}`}>Register yourself</Link>
                    </div>

                    <CurrentEventsListItem data={data} />
                </div>
            ) : (
                <div>
                    <p>There is no one here yet</p>
                    <Link to="/events">Back to events</Link>
                    <Link to={`/register-event/${evenId}`}>Register yourself</Link>
                </div>
            )}
        </div>
    )
}
