import React from 'react';
import Assignment from './Assignment';

function Timeline() {
    return (
        <section className="dashboard-card timeline-card">
            <h2>Timeline</h2>

            <div className="timeline-list">
                {/* Add as many assignments as you need! */}
                <Assignment
                    title="Assignment"
                    author="Ali kashoa"
                    daysLeft={5}
                />

                <Assignment
                    title="Assignment"
                    author="Ali kashoa"
                    daysLeft={5}
                />

                <Assignment
                    title="Assignment"
                    author="Ali kashoa"
                    daysLeft={5}
                />

                <Assignment
                    title="Assignment"
                    author="Ali kashoa"
                    daysLeft={5}
                />
            </div>
        </section>
    );
}

export default Timeline;