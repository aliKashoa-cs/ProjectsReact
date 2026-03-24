import React from 'react';
import './Assignment.css';

function Assignment({ title, author, daysLeft }) {
    return (
        <div className="assignment-item">
            {/* The Upload/Share Icon built with SVG */}
            <div className="assignment-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
            </div>

            {/* The stacked text details */}
            <div className="assignment-details">
                <h3 className="assignment-title">{title}</h3>
                <p className="assignment-author">by {author}</p>
            </div>

            {/* The days left text, pushed to the right */}
            <div className="assignment-time">
                {daysLeft} days left
            </div>
        </div>
    );
}

export default Assignment;