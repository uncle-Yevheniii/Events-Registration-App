import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { allEvents } from '@/api/allEvents.api'

import style from './style.module.css'

export default function EventsPage() {
    const [data, setData] = useState([]) //TODO: type
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setSetCurrentPage] = useState<number>(0)

    const PER_PAGE: number = 6

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
                        <ul>
                            {data.map(({ _id, eventInfo: { title, description, eventDate, organizer } }) => (
                                <li key={_id}>
                                    <p>{title}</p>
                                    <p>{description}</p>
                                    <p>{organizer}</p>
                                    <p>{eventDate}</p>

                                    <div>
                                        <Link to={`/register-event/${_id}`}>Register event</Link>
                                        <Link to={`/current-event/${_id}`}>View event</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div>
                            {/* //TODO: Add pagination */}
                            <button
                                type="button"
                                disabled={currentPage === 0}
                                onClick={() => {
                                    if (currentPage === 0) return
                                    setSetCurrentPage(currentPage - 1)
                                }}
                            >
                                prev
                            </button>
                            <button
                                type="button"
                                disabled={data.length < PER_PAGE}
                                onClick={() => {
                                    if (data.length < PER_PAGE) return
                                    setSetCurrentPage(currentPage + 1)
                                }}
                            >
                                next
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
