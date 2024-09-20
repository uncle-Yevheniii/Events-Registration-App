import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IEvent } from '@/types/type'
import { allEvents } from '@/api/allEvents.api'
import { EventsListItem, Pagination } from '@/components'

import style from './style.module.css'

export default function EventsPage() {
    const [data, setData] = useState<IEvent[]>([]) //TODO: type ✔
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const currentPage = Number(queryParams.get('page')) || 1

    function handlePageChange(newPage: string | number) {
        queryParams.set('page', newPage as string)
        navigate({ search: queryParams.toString() })
    }

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = () => {
            setLoading(true)
            allEvents(currentPage, controller)
                .then((res) => {
                    setData(res.events)
                })
                .catch((err) => (err.code !== 'ERR_CANCELED' ? setError(true) : setError(false)))
                .finally(() => setLoading(false))
        }
        fetchData()

        return () => controller.abort()
    }, [currentPage])

    return (
        <div className={style.eventsPage__wrapper}>
            <h2 className={style.eventsPage__title}>Events</h2>
            {error && <p>Something went wrong</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                data.length > 0 && (
                    <div>
                        <EventsListItem data={data} />

                        <Pagination data={data} currentPage={currentPage} handlePageChange={handlePageChange} />
                    </div>
                )
            )}
        </div>
    )
}
