import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import {AiOutlineCheckCircle} from "react-icons/ai"
import "./index.css";


const ModulesHeader = () => {
    return (
        <div class="d-flex flex-row border-bottom border-2 justify-content-end pb-3" id="course-module-buttons-top">
            <button class="btn btn-secondary me-1" type="button">Collapse All</button>
            <button class="btn btn-secondary me-1" type="button">View Progress</button>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle me-1 py-1" data-bs-toggle="dropdown" aria-expanded="false"
                    type="button">
                    <AiOutlineCheckCircle className="text-white pe-2 twice-lg"/>
                    Publish All
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Publish selected items</a></li>
                    <li><a class="dropdown-item" href="#">UnPublish</a></li>
                    <li><a class="dropdown-item" href="#">other actions</a></li>
                </ul>
            </div>
            <button class="btn btn-danger me-1" type="button">
                <FiPlus className="pe-1"/>Module</button>
            <button class="btn btn-secondary me-2" type="button"><FaEllipsisV/></button>
        </div>
    );
}

export default ModulesHeader;