import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

function AssignmentHeader() {
  const { courseId } = useParams();

  return (
    <div class="d-flex flex-row justify-content-between pb-3 border-bottom border-2">
      <input
        class="form-control w-25"
        type="text"
        placeholder="Search for Assignment"
        aria-label="default input"
      />
      <div class="d-flex flex-row">
        <button class="btn btn-secondary me-1" type="button">
          <FiPlus />
          Group
        </button>

        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/addAssignment`}
          className="btn btn-danger me-1"
        >
          <FiPlus />
          Assignment
        </Link>

        <button class="btn btn-secondary me-1" type="button">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
};

export default AssignmentHeader;
