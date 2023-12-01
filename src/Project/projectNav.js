import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProjectNav() {
    const { pathname } = useLocation();

    return (
        <nav className="nav flex-column">
            <ul>
                <li><Link to="/project/home" className={`nav-link ${pathname.includes("/project/home") ? "active" : ""}`}>Home</Link></li>
                <li><Link to="/project/signin" className={`nav-link ${pathname.includes("/project/signin") ? "active" : ""}`}>Sign-In</Link></li>
                <li><Link to="/project/signup" className={`nav-link ${pathname.includes("/project/signup") ? "active" : ""}`}>Sign-Up</Link></li>
                <li><Link to="/project/account" className={`nav-link ${pathname.includes("/project/account") ? "active" : ""}`}>Account</Link></li>
                <li><Link to="/project/search" className={`nav-link ${pathname.includes("/project/search") ? "active" : ""}`}>Search</Link></li>
            </ul>
        </nav>
    );
}

export default ProjectNav;