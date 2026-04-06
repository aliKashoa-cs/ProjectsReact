import React from 'react';
import './CoursesHeader.css'; // Or append the CSS below to your existing Hero.css

const CoursesHeader = () => {
    return (
        <section className="courses-header-section">
            <div className="section-title-wrapper">

                {/* Top Text with Lines */}
                <div className="title-divider-container">
                    <span className="divider-line"></span>
                    <span className="subtitle-text">رائجة وشائعة</span>
                    <span className="divider-line"></span>
                </div>

                {/* Main Headings */}
                <h2 className="main-heading">أحدث الدورات مع أفضل المعلمين</h2>
                <p className="sub-heading">كُن قائد سفينتك في الوقت الصّعب</p>

            </div>
        </section>
    );
};

export default CoursesHeader;