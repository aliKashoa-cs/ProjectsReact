import React from 'react';
import Timeline from './Timeline';
import Announcements from './Announcements';
import Units from './Units';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            {/* Top Title Bar */}
            <div className="dashboard-title-bar">
                <h1>Dashboard</h1>
            </div>

            {/* Main Layout Grid */}
            <div className="dashboard-grid">

                {/* The individual components are placed into the grid here */}
                <Timeline />
                <Announcements />
                <Units />

            </div>
        </div>
    );
}

export default Dashboard;