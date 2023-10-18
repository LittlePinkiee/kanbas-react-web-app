import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";


const AssignmentEditorHeader = () => {
    return (
        <div class="d-flex flex-row border-bottom border-2 justify-content-end pb-2">
            <BsCheckCircleFill className="text-success mt-2" />
            <span class="text-success mx-2 mt-1">Published</span>
            <button class="btn btn-secondary rounded-1 mx-2 px-2" type="button">
                <FaEllipsisV />
            </button>
        </div>
    );
};

export default AssignmentEditorHeader;