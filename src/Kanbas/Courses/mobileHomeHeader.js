import React from "react";
import { FiMenu } from "react-icons/fi";
import {BiGlasses} from "react-icons/bi";
import {BsChevronDown} from "react-icons/bs";


const MobileHomeHeader = () => {
    return (
        <div className="d-block d-md-none d-flex bg-black py-3 justify-content-between">
            <button type="button" className="btn">
                <a href="/Kanbas/KanbasNavigation">
                    <FiMenu className="text-white align-items-center"/>
                </a>
            </button>

            <div className="d-flex flex-column text-white align-items-center">
                <span>CS4550.12631.20410</span>
                <span className="">Modules</span>
            </div>

            <button type="button" className="btn">
                <a href="/Kanbas/Courses/CourseNavigation">
                    <BiGlasses className="text-white align-items-center"/>
                    <BsChevronDown className="text-white align-items-center"/>
                </a>

            </button>
        </div>
    )
}

export default MobileHomeHeader;