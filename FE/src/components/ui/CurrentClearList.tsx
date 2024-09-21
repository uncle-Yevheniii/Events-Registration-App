import { Link } from 'react-router-dom'

import style from './style.module.css'

export default function CurrentClearList({ evenId }: { evenId: string }) {
    return (
        <div className={style.currentEventNavigation__linksWrapper}>
            <Link to="/events" className={style.currentEventNavigation__link}>
                Back to events
            </Link>
            <Link to={`/register-event/${evenId}`} className={style.currentEventNavigation__link}>
                Register yourself
            </Link>
            <p className={style.currentEventNavigation__text}>There is no one here yet 😥</p>
        </div>
    )
}
