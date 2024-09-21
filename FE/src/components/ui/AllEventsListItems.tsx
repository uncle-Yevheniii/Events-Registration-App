import { Link } from 'react-router-dom'

import { IEvent } from '@/types/type'

import style from './style.module.css'

export default function AllEventsListItem({ data }: { data: IEvent[] }) {
    return (
        <ul className={style.allEventsListItem__list}>
            {data.map((item: IEvent) => (
                <li key={item._id} className={style.allEventsListItem__item}>
                    <p className={style.allEventsListItem__title}>{item.eventInfo.title}</p>
                    <p className={style.allEventsListItem__description}>{item.eventInfo.description}</p>
                    <p className={style.allEventsListItem__organizer}>{item.eventInfo.organizer}</p>
                    <p className={style.allEventsListItem__date}>{item.eventInfo.eventDate}</p>

                    <div className={style.allEventsListItem__linksWrapper}>
                        <Link to={`/register-event/${item._id}`} className={style.allEventsListItem__link}>
                            Register event
                        </Link>
                        <Link to={`/current-event/${item._id}`} className={style.allEventsListItem__link}>
                            View event
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
