import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import "./index.css";


const AssignmentHeader = () => {
    return (
        <div class="d-flex flex-row justify-content-between pb-3 border-bottom border-2">
        <input class="form-control w-25" type="text" placeholder="Search for Assignment"
          aria-label="default input"/>
        <div class="d-flex flex-row">
          <button class="btn btn-secondary me-1" type="button">
            <FiPlus/>Group</button>
          <button class="btn btn-danger me-1" type="button">
          <FiPlus/>Assignment</button>
          <button class="btn btn-secondary me-1" type="button"><FaEllipsisV/></button>
        </div>
      </div>
    )
}

export default AssignmentHeader;