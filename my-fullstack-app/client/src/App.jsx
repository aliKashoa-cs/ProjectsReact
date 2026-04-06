import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarNotUser from "./Componets/NavBars/NavBarNotUser.jsx";
import HeroSection from "./Componets/HomePage/HeroSection.jsx";
import "./App.css"
import CoursesHeader from "./Componets/HomePage/CoursesHeader/CoursesHeader.jsx";
import CoursesGrid from "./Componets/HomePage/CoursesGrid/CoursesGrid.jsx";
import  FeaturesSection from "./Componets/HomePage/FeaturesSection/FeaturesSection.jsx";
import GenericFooter from "./Componets/GenericFooter/GenericFooter.jsx";
import CoursePage from "./Componets/SingleCourseView/CoursePage.jsx";
// Dummy components just for demonstration
const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <CoursesHeader />
            <CoursesGrid />

        </div>
    );

};
const Exams = () => {
    return (
        <div>

<CoursePage />
        </div>

    )
};
const Login = () => <h1>تسجيل الدخول (Login Page)</h1>;

function App() {
    return (
        <Router>
            <div className="App">
                {/* The NavBar stays persistent at the top */}
                <NavBarNotUser />

                {/* The Routes change the content below the NavBar based on the URL */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<Exams />} />
                        <Route path="/login" element={<Login />} />
                        {/* Add the rest of your routes here... */}
                    </Routes>
                </main>
                <GenericFooter />
            </div>
        </Router>
    );
}



export default App;