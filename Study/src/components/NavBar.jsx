import React, { useState } from 'react';
import './Navbar.css';

const navItems = ['Dashboard', 'Units', 'Assignments', 'Exams', 'Materials'];

function Navbar({ activeTab, setActiveTab }) {
    // New state to track if the mobile dropdown is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle the menu open/closed
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle clicking a tab: update the active tab AND close the mobile menu
    const handleTabClick = (item) => {
        setActiveTab(item);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon" role="img" aria-label="logo">💡</span>
                <div className="logo-text">
                    <h2>EduTech</h2>
                    <p>Empowering Learning Through Innovation</p>
                </div>
            </div>

            {/* Hamburger Icon (Only visible on mobile) */}
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {/* Switch between a hamburger (☰) and a close (✖) icon */}
                {isMobileMenuOpen ? '✖' : '☰'}
            </div>

            {/* Navigation Links (Adds 'nav-active' class when mobile menu is open) */}
            <div className={`navbar-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                {navItems.map((item) => (
                    <button
                        key={item}
                        className={`nav-button ${activeTab === item ? 'active' : ''}`}
                        onClick={() => handleTabClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Right Side Actions (Hidden inside the mobile menu, or kept visible depending on preference. Here we keep them visible on tablet, hide on very small mobile) */}
            <div className="navbar-actions">
                <div className="notification-bell">
                    <span role="img" aria-label="notifications">🔔</span>
                    <span className="badge">17</span>
                </div>
                <div className="user-avatar">AK</div>
            </div>
        </nav>
    );
}

export default Navbar;