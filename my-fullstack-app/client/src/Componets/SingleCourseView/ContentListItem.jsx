import React, { useState } from 'react';
import './ContentListItem.css';

const ContentListItem = ({
                             title = "تحويل وحدات",
                             topicCount = "4 المواضيع",
                             isSample = true, // Set to true to match your image
                             isLocked = false, // Set to false so we can open it
                             isCompleted = false,
                             // New Prop: Array of sub-lessons
                             subItems = [
                                 { id: 1, title: 'تحويل وحدات 1', isCompleted: false },
                                 { id: 2, title: 'تحويل وحدات 2', isCompleted: false },
                                 { id: 3, title: 'وحدات مساحة 1', isCompleted: false },
                                 { id: 4, title: 'وحدات مساحة 2', isCompleted: false },
                             ]
                         }) => {
    // State to track if the accordion is open
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function (only works if the lesson is not locked)
    const toggleOpen = () => {
        if (!isLocked) {
            setIsOpen(!isOpen);
        }
    };

    // Dynamically calculate progress
    const totalSteps = subItems.length;
    const completedSteps = subItems.filter(item => item.isCompleted).length;
    const progressPercent = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

    return (
        <div className={`list-item-wrapper ${isOpen ? 'is-open' : ''}`} dir="rtl">

            {/* === Main Header Row (Clickable) === */}
            <div
                className={`list-item-header ${!isLocked ? 'clickable' : ''}`}
                onClick={toggleOpen}
            >
                {/* Right Side: Chevron & Title */}
                <div className="list-item-right">
                    {/* Blue Dropdown Chevron (Replaces Play Icon on main row) */}
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`chevron-icon ${isOpen ? 'rotated' : ''}`}
                    >
                        <circle cx="12" cy="12" r="12" fill="#0ea5e9"/>
                        <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="lesson-title">{title}</span>
                </div>

                {/* Left Side: Metadata & Status Icons */}
                <div className="list-item-left">
                    {isSample ? (
                        <div className="sample-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span>الدرس كعينة</span>
                        </div>
                    ) : isLocked ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lock-icon">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                        </svg>
                    ) : null}

                    <span className="topic-count">{topicCount}</span>

                    <div className={`completion-circle ${isCompleted ? 'completed' : ''}`}>
                        {isCompleted && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* === Expanded Dropdown Content === */}
            {isOpen && !isLocked && (
                <div className="list-item-body">

                    {/* Progress Sub-header */}
                    <div className="body-header">
                        <span className="body-title">الدرس Content</span>
                        <div className="body-progress">
                            <span>Complete {progressPercent}%</span>
                            <span>Steps {completedSteps}/{totalSteps}</span>
                        </div>
                    </div>

                    {/* Sub-lessons List */}
                    <div className="sub-items-list">
                        {subItems.map((item) => (
                            <div key={item.id} className="sub-item-row">
                                {/* Right: Play icon and text */}
                                <div className="sub-item-right">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                    </svg>
                                    <span className="sub-item-title">{item.title}</span>
                                </div>

                                {/* Left: Checkbox circle */}
                                <div className={`completion-circle small ${item.isCompleted ? 'completed' : ''}`}></div>
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>
    );
};

export default ContentListItem;