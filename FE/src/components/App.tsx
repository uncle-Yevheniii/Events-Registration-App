import { Navigate, Route, Routes } from 'react-router-dom'

import { EventsPage, RegisterEventPage, ViewEventPage } from '@/pages'
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/events" element={<EventsPage />} />
                <Route path="/register-event/:evenId" element={<RegisterEventPage />} />
                <Route path="/view-event/:evenId" element={<ViewEventPage />} />

                <Route path="*" element={<Navigate to="/events" replace />} />
            </Routes>
        </div>
    )
}
