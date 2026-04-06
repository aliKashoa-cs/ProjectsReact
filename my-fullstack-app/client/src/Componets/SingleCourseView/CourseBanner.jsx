import React from 'react';
import './CourseBanner.css';

const CourseBanner = ({
                          backgroundImageSrc = "https://t4.ftcdn.net/jpg/05/08/10/35/360_F_508103535_BvW4uJs6MKlAVrRPSwGJ1Y36t5pw0EvD.jpg", // Fallback default
                          courseCategory = "فيزياء",
                          courseTitle = "فيزياء - ميكانيكا",
                          viewDetailsText = "View details المساق"
                      }) => {
    return (
        <div
            className="course-banner-container"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
            dir="rtl"
        >
            {/* Dark gradient overlay to make the white text pop against any background image */}
            <div className="banner-overlay"></div>

            <div className="banner-content-wrapper">
                <div className="banner-text-content">
                    <span className="course-category">{courseCategory}</span>
                    <h1 className="course-title">{courseTitle}</h1>

                    <button className="view-details-link">
                        {viewDetailsText}
                        {/* Small down arrow icon */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;