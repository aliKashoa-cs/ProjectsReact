import React from 'react';
import './Unit.css';

function Unit({ color, title, instructor, progress }) {
    return (
        <div className="unit-item">
            {/* The colored square on the left. We use inline styles here so the color prop actually sets the background! */}
            <div className="unit-color-box" style={{ backgroundColor: color }}></div>

            {/* The stacked text details on the right */}
            <div className="unit-details">
                <h3 className="unit-title">{title}</h3>
                <p className="unit-instructor">{instructor}</p>
                <p className="unit-progress">{progress}% Complete</p>
            </div>
        </div>
    );
}

export default Unit;