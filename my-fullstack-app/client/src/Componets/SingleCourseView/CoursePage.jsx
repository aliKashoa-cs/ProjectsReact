import React from 'react';
import CourseBanner from './CourseBanner';
import CourseCard from './CourseCard';
import ContentListItem from './ContentListItem';
import './CoursePage.css'; // <-- Import the new layout CSS

function CoursePage() {
    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh' }}>

            <CourseBanner courseTitle="فيزياء - ميكانيكا" />

            {/* Main Page Layout Container */}
            <div className="course-page-layout">

                {/* 1. The Course Card (Will be on top for mobile, left for desktop) */}
                <div className="course-page-sidebar">
                    <CourseCard />
                </div>

                {/* 2. The Curriculum List (Will be below on mobile, right for desktop) */}
                <div className="course-page-main">
                    <h2 style={{ textAlign: 'right', marginBottom: '1.5rem', color: '#1e293b' }}>
                        محتوى المساق
                    </h2>

                    <ContentListItem title="تحويل وحدات" isLocked={false} />
                    <ContentListItem title="رسوم بيانية" isLocked={true} />
                    <ContentListItem title="الازاحة والمسافة" isLocked={true} />
                </div>

            </div>
        </div>
    );
}

export default CoursePage;