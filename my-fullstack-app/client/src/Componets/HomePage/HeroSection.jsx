import React from 'react';
import './HeroSection.css'; // Make sure this matches your CSS file name exactly

const HeroSection = () => {
    return (
        <section className="hero-wrapper">
            {/* Background light blue shape */}
            <div className="hero-bg-shape"></div>

            <div className="hero-container">

                {/* Text Content */}
                <div className="hero-text-col">
                    <p className="hero-subtitle">ابدأ معنا رحلتك التعليمية</p>

                    <ul className="hero-list">
                        <li><SubjectIcon /> رياضيات</li>
                        <li><SubjectIcon /> فيزياء - ميكانيكا</li>
                        <li><SubjectIcon /> فيزياء - كهرباء</li>
                        <li><SubjectIcon /> بيولوجيا</li>
                        <li><SubjectIcon /> حاسوب</li>
                    </ul>

                    <h2 className="hero-title">بأسلوب شيّق ومبسّط</h2>

                    <button className="hero-btn">
                        <ButtonIcon /> لكافة الدورات
                    </button>
                </div>

                {/* Video Content */}
                <div className="hero-video-col">
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/M7lc1UVf-VE?si=v2s89tP_U5Ww4jR9"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
};

// --- SVG Icons (Required to prevent React from crashing) ---

const SubjectIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#fb923c' }}>
        <path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" fill="currentColor"/>
        <path d="M18 9H6C4.89543 9 4 9.89543 4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11C20 9.89543 19.1046 9 18 9Z" fill="currentColor"/>
    </svg>
);

const ButtonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
        <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
        <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
        <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
    </svg>
);

export default HeroSection;