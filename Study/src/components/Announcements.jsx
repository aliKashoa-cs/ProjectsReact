import React from 'react';
import Announcement from './Announcement';

function Announcements() {
    return (
        <section className="dashboard-card announcements-card">
            <h2>Latest announcements</h2>

            <div className="announcements-list">
                {/* The exact announcement from your screenshot */}
                <Announcement
                    date="11 March 2026, 11:08 AM"
                    author="Shlomi Ventura"
                    title="Maintenance - תחזוקה"
                />

                {/* A dummy second announcement to show spacing */}
                <Announcement
                    date="09 March 2026, 02:15 PM"
                    author="Ali kashoa"
                    title="Welcome to the new semester"
                />
            </div>
        </section>
    );
}

export default Announcements;