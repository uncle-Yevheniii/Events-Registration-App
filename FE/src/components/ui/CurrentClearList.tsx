import { Link } from 'react-router-dom'

export default function CurrentClearList({ evenId }: { evenId: string }) {
    return (
        <div>
            <p>There is no one here yet</p>
            <Link to="/events">Back to events</Link>
            <Link to={`/register-event/${evenId}`}>Register yourself</Link>
        </div>
    )
}
