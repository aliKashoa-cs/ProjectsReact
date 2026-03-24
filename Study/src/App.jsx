import React, { useState } from 'react';
import Navbar from './components/NavBar.jsx';
import './style.css'; // Optional: for the main layout styles
import Dashboard from './components/Dashboard.jsx';
// --- Dummy Page Components ---
// const Dashboard = () => (
//     <div className="page-content">
//         <h1>Welcome back, AK! 👋</h1>
//         <p>Here is an overview of your recent learning activity.</p>
//         {/* You would add your charts or summary cards here */}
//     </div>
// );

const Units = () => (
    <div className="page-content">
        <h1>Your Units</h1>
        <p>Select a module to continue learning.</p>
    </div>
);

const Assignments = () => (
    <div className="page-content">
        <h1>Pending Assignments</h1>
        <p>You have 2 assignments due this week.</p>
    </div>
);

const Exams = () => (
    <div className="page-content">
        <h1>Upcoming Exams</h1>
        <p>No exams scheduled for the next 7 days. Take a breather!</p>
    </div>
);

const Materials = () => (
    <div className="page-content">
        <h1>Study Materials</h1>
        <p>Browse PDFs, slides, and recorded lectures.</p>
    </div>
);

// --- Main App Component ---
function App() {
    // We moved the state here! Now the whole app knows the active tab.
    const [currentView, setCurrentView] = useState('Dashboard');

    // A simple function to render the correct component
    const renderContent = () => {
        switch (currentView) {
            case 'Dashboard': return <Dashboard />;
            case 'Units': return <Units />;
            case 'Assignments': return <Assignments />;
            case 'Exams': return <Exams />;
            case 'Materials': return <Materials />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="app-container">
            {/* Pass the state and the updater function as props to the Navbar */}
            <Navbar activeTab={currentView} setActiveTab={setCurrentView} />

            {/* The main content area below the navbar */}
            <main className="main-layout">
                {renderContent()}
            </main>
        </div>
    );
}

export default App;