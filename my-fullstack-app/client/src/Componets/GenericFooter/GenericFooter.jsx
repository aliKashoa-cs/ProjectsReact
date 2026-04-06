import React from 'react';
import './GenericFooter.css';

// Generic placeholder data
const brandDescription = "اكتب هنا نبذة تعريفية قصيرة عن موقعك أو شركتك. يمكنك إضافة أهدافك أو رؤيتك لتشجيع الزوار على التفاعل مع منصتك واستكشاف المزيد.";
const quickLinks = ["الرئيسية", "من نحن", "الخدمات", "المدونة"];
const supportLinks = ["تواصل معنا", "الأسئلة الشائعة", "سياسة الخصوصية", "شروط الاستخدام"];
const contactData = [
    { type: "mail", value: "info@yourdomain.com" },
    { type: "phone", value: "+966 12 345 6789" },
    { type: "phone-alt", value: "+966 98 765 4321" },
    { type: "social", value: "@yourhandle" }
];

const GenericFooter = ({
                           backgroundColor = '#1f2937', // Dark gray
                           textColor = '#f3f4f6',       // Light text
                           brandColor = '#3b82f6'       // Blue accent
                       }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="generic-footer" style={{ backgroundColor, color: textColor }}>
            <div className="footer-grid">

                {/* Column 1: Brand & Description */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo" style={{ color: brandColor }}>YOUR LOGO</h2>
                    <p className="footer-desc">{brandDescription}</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3 className="footer-heading">روابط مهمة</h3>
                    <ul className="footer-list">
                        {quickLinks.map((link, index) => (
                            <li key={index}><a href="#" style={{ color: textColor }}>{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Support & Legal */}
                <div className="footer-col">
                    <h3 className="footer-heading">الدعم والمساعدة</h3>
                    <ul className="footer-list">
                        {supportLinks.map((link, index) => (
                            <li key={index}><a href="#" style={{ color: textColor }}>{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="footer-col">
                    <h3 className="footer-heading">معلومات التواصل</h3>
                    <ul className="footer-contact-list">
                        {contactData.map((item, index) => (
                            <li key={index} className="contact-item">
                                <span className="contact-icon"></span>
                                <span className="contact-text" dir="ltr">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <hr className="footer-line" style={{ borderColor: textColor }} />

            {/* Bottom Bar: Copyright & Floating Action Button */}
            <div className="footer-bottom">
                <p className="copyright">جميع الحقوق محفوظة {currentYear} ©</p>

                {/* Generic Floating Action Button (e.g., for WhatsApp or Chat) */}
                <div className="fab-wrapper">
                    <button className="fab-button" aria-label="Chat with us">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default GenericFooter;