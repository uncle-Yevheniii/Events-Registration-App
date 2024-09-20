import { Navigate, Route, Routes } from 'react-router-dom'

import { EventsPage, RegisterEventPage, ViewEventPage } from '@/pages'
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/events" element={<EventsPage />} />
                <Route path="/register-event/:event-id" element={<RegisterEventPage />} />
                <Route path="/view-event/:event-id" element={<ViewEventPage />} />

                <Route path="*" element={<Navigate to="/events" replace />} />
            </Routes>
        </div>
    )
}
