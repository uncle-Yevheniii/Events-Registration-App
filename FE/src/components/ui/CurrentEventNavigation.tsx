import { Link } from 'react-router-dom'

import style from './style.module.css'

export default function CurrentEventNavigation({ evenId }: { evenId: string }) {
    return (
        <div className={style.currentEventNavigation__linksWrapper}>
            <Link to="/events" className={style.currentEventNavigation__link}>
                Back to events
            </Link>
            <Link to={`/register-event/${evenId}`} className={style.currentEventNavigation__link}>
                Register yourself
            </Link>
        </div>
    )
}
