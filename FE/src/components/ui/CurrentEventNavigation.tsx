import { Link } from 'react-router-dom'

export default function CurrentEventNavigation({ evenId }: { evenId: string }) {
    return (
        <div>
            <Link to="/events">Back to events</Link>
            <Link to={`/register-event/${evenId}`}>Register yourself</Link>
        </div>
    )
}
