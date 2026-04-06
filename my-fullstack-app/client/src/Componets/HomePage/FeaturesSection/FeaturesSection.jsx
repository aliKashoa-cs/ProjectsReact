import React from 'react';
import './FeaturesSection.css';

const featuresData = [
    {
        id: 1,
        title: 'طاقم تعليمي محترف',
        description: 'خبرة تعليمية في مجال الرياضيات مع أقوى المعلمين، شعارهم في التعليم "البساطة، العمق، والشرح المستفيض"',
        icon: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'دورات احترافية',
        description: 'Bscool هو الموقع الأول من نوعه الذي يوفّر دروس، حلول وأمثلة في الرياضيات متاحة في كل وقت على شبكة الإنترنت للصفوف التاسعة حتى الثانية عشر',
        icon: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM17 18H7V16H17V18ZM17 14H7V12H17V14ZM13 9V3.5L18.5 9H13Z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'كتب تعليمية',
        description: 'نقدم للطلاب نماذج امتحانية وأمثلة عديدة وكتب تعليمية تسهّل عليهم طريقة الدراسة والتحضير للامتحانات وتحقيق النجاح',
        icon: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H18V20ZM16 11H8V9H16V11ZM16 15H8V13H16V15Z" />
            </svg>
        )
    },
    {
        id: 4,
        title: 'وصول مدى الحياة',
        description: 'جميع الدورات والمصادر التعليمية الأخرى متوفرة بشكل دائم لطلابنا، حيث يمكنهم التعلم ومشاهدة الفيديوهات في أي وقت يريدونه',
        icon: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
        )
    }
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="feature-item">
                        <div className="feature-icon-wrapper">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;