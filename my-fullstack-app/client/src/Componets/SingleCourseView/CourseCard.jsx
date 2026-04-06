
import React from 'react';
import './CourseCard.css';

const CourseCard = ({
                        thumbnailSrc = "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
                        priceText = "400",
                        courseMetricsTitle = "المساق INCLUDES",
                        lessonCountText = "20 الدروس",
                        topicCountText = "318 المواضيع",
                        enrolledMetricText = "enrolled 160+",
                        enrollmentStatusText = "Not Enrolled",
                        enrollButtonText = "الاتحاق بالمساق"
                    }) => {
    return (
        <div className="course-card-wrapper" dir="rtl">

            {/* 1. Top Image Thumbnail */}
            <div className="card-thumbnail-container">
                <img src={thumbnailSrc} alt="Course Thumbnail" className="card-thumbnail" />
            </div>

            <div className="card-body">

                {/* 2. Enrollment Stats (Text + overlapping avatars) */}
                <div className="enrollment-stats">
                    <span className="enrolled-text" dir="ltr">{enrolledMetricText}</span>
                    <div className="avatar-group">
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                    </div>
                </div>

                {/* 3. Enrollment Status Badge */}
                <div className="status-badge">
                    {enrollmentStatusText}
                </div>

                {/* 4. Primary CTA Button */}
                <button className="enroll-btn">
                    {enrollButtonText}
                </button>

                {/* 5. Price */}
                <div className="price-text">
                    {priceText}
                </div>

                {/* 6. Course Includes Meta Data */}
                <div className="course-includes-section">
                    {/* Removed the dir="ltr" so it respects the RTL parent */}
                    <h4 className="includes-title">{courseMetricsTitle}</h4>

                    <ul className="includes-list">
                        <li>
                            {/* Icon goes FIRST so it appears on the right in RTL */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span className="includes-text">{lessonCountText}</span>
                        </li>
                        <li>
                            {/* Icon goes FIRST */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                            <span className="includes-text">{topicCountText}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;