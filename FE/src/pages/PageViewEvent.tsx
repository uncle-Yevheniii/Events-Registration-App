import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { IParticipantsInfo } from '@/types/type'
import { currentEvent } from '@/api/currentEvent.api'
import { CurrentClearList, CurrentEventListItems, CurrentEventNavigation, Title } from '@/components'

export default function ViewEventPage() {
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<IParticipantsInfo[]>([]) //TODO: type ✔

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
            <Title>"Awesome Event" participants</Title>
            {error && <p>Something went wrong</p>}
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div>
                    <CurrentEventNavigation evenId={evenId ?? ''} />
                    <CurrentEventListItems data={data} />
                </div>
            ) : (
                <CurrentClearList evenId={evenId ?? ''} />
            )}
        </div>
    )
}
