import React from "react";
import { FiMenu } from "react-icons/fi";


const MobileHomeHeader = () => {
    return (
        <div class="d-block d-md-none d-flex bg-black py-3 justify-content-between">
            <button type="button" class="btn">
                <a href="/Kanbas/KanbasNavigation">
                    <FiMenu/>
                </a>
            </button>

            <div class="d-flex flex-column text-white align-items-center">
                <span>CS4550.12631.20410</span>
                <span class="">Modules</span>
            </div>

            <button type="button" class="btn">
                <a href="/Kanbas/Courses/CourseNavigation">
                    <i class="fa-solid fa-glasses pe-1 text-white"></i>
                    <i class="fa-solid fa-chevron-down text-white"></i>
                </a>

            </button>
        </div>
    )
}

export default MobileHomeHeader;