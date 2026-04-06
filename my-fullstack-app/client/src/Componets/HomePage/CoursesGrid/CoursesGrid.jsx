import React from 'react';
import './CoursesGrid.css';

// This is the data powering your grid. You can easily edit names and numbers here!
const coursesData = [
    { id: 1, type: 'chalkboard', title: 'دورة رياضيات الصف التاسع', lessons: '5 دروس' },
    { id: 2, type: 'number', number: '801', title: 'دورة رياضيات 801', lessons: '9 دروس' },
    { id: 3, type: 'number', number: '802', title: 'دورة رياضيات 802', lessons: '13 دروس' },
    { id: 4, type: 'number', number: '803', title: 'دورة رياضيات 803', lessons: '11 دروس' },
    { id: 5, type: 'chalkboard', title: 'دورة رياضيات الصف الثامن', lessons: '7 دروس' },
    { id: 6, type: 'chalkboard', title: 'دورة رياضيات الصف السابع', lessons: '6 دروس' },
    { id: 7, type: 'number', number: '805', title: 'دورة رياضيات 805', lessons: '10 دروس' },
    { id: 8, type: 'number', number: '804', title: 'دورة رياضيات 804', lessons: '12 دروس' },
];

const CoursesGrid = () => {
    return (
        <section className="courses-section">
            <div className="courses-container">

                <div className="courses-grid">
                    {coursesData.map((course) => (
                        <div key={course.id} className="course-card">

                            {/* Image Thumbnail Area */}
                            <div className={`card-image-wrapper ${course.type === 'chalkboard' ? 'chalkboard-bg' : 'math-bg'}`}>
                                <span className="enrollment-badge">NOT ENROLLED</span>

                                {/* Render the blue circle OR the chalk text based on the course type */}
                                {course.type === 'number' ? (
                                    <div className="blue-circle">{course.number}</div>
                                ) : (
                                    <span>I ♡ MATH</span>
                                )}
                            </div>

                            {/* Text Content Area */}
                            <div className="card-content">
                                <span className="course-lessons">{course.lessons}</span>
                                <h3 className="course-title">{course.title}</h3>

                                <button className="see-more-btn">...See more</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoursesGrid;