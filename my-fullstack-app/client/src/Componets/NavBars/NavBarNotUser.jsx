import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBarNotUser.css";

const NavBarNotUser = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsDropdownOpen(false); // Reset dropdown when mobile menu toggles
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    // Mobile touch toggle for the dropdown
    const toggleDropdown = (e) => {
        // Prevent default to stop weird anchor jump behavior
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLoginClick = () => {
        closeMobileMenu();
        navigate("/login");
    };

    const handleSignupClick = () => {
        closeMobileMenu();
        navigate("/signup");
    };

    return (
        <nav className="navbar" dir="rtl">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMobileMenu}>
                        بوابة التعليم
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? "✕" : "☰"}
                </div>

                {/* Navigation Links */}
                <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <Link to="/exams" className="nav-links" onClick={closeMobileMenu}>
                            الامتحانات
                        </Link>
                    </li>

                    {/* Dropdown Menu */}
                    <li
                        className="nav-item dropdown"
                        onMouseEnter={() => window.innerWidth > 960 && setIsDropdownOpen(true)}
                        onMouseLeave={() => window.innerWidth > 960 && setIsDropdownOpen(false)}
                    >
                        {/* Added onClick for mobile tapping */}
                        <div className="nav-links dropdown-toggle" onClick={toggleDropdown}>
                            ملخصات الرياضيات {isDropdownOpen ? "▲" : "▼"}
                        </div>

                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/cheat-sheets/algebra" className="dropdown-link" onClick={closeMobileMenu}>الجبر</Link>
                                </li>
                                <li>
                                    <Link to="/cheat-sheets/geometry" className="dropdown-link" onClick={closeMobileMenu}>الهندسة</Link>
                                </li>
                                <li>
                                    <Link to="/cheat-sheets/calculus" className="dropdown-link" onClick={closeMobileMenu}>التفاضل والتكامل</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            من نحن
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            اتصل بنا
                        </Link>
                    </li>

                    {/* Mobile Buttons */}
                    <li className="nav-item mobile-buttons">
                        <button className="btn-login" onClick={handleLoginClick}>
                            تسجيل الدخول
                        </button>
                        <button className="btn-signup" onClick={handleSignupClick}>
                            إنشاء حساب
                        </button>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="navbar-buttons">
                    <button className="btn-login" onClick={handleLoginClick}>
                        تسجيل الدخول
                    </button>
                    <button className="btn-signup" onClick={handleSignupClick}>
                        إنشاء حساب
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBarNotUser;