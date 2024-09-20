import { Link } from 'react-router-dom'

import { IEvent } from '@/types/type'

export default function AllEventsListItem({ data }: { data: IEvent[] }) {
    return (
        <ul>
            {data.map((item: IEvent) => (
                <li key={item._id}>
                    <p>{item.eventInfo.title}</p>
                    <p>{item.eventInfo.description}</p>
                    <p>{item.eventInfo.organizer}</p>
                    <p>{item.eventInfo.eventDate}</p>

                    <div>
                        <Link to={`/register-event/${item._id}`}>Register event</Link>
                        <Link to={`/current-event/${item._id}`}>View event</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
