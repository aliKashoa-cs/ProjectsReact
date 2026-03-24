import React from 'react';
import './Announcement.css';

function Announcement({ date, author, title }) {
    return (
        <div className="announcement-item">
            <p className="announcement-date">{date}</p>
            <p className="announcement-author">{author}</p>
            {/* Using an anchor tag here so it behaves like a real link */}
            <a href="#" className="announcement-title">{title}</a>
        </div>
    );
}

export default Announcement;