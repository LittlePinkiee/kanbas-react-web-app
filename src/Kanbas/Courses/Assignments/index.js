import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import db from "../../Database";
import AssignmentHeader from "./AssignmentHeader";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="list-group mb-4 rounded-0">
      <AssignmentHeader />
      <h5 className="pt-3">Assignments for course {courseId}</h5>

      <div class="d-flex justify-content-between border-1 list-group-item list-group-item-secondary ps-2 py-3 pe-4 mt-3">
        <div class="d-flex align-items-center">
          <FaEllipsisV className="me-2" />
          <h6 className="m-0">ASSIGNMENTS</h6>
        </div>
        <div class="d-flex align-items-center float-end">
          <div class="badge rounded-pill text-bg-secondary">40% of Total</div>
          <FiPlus className="mx-1" />
          <FaEllipsisV />
        </div>
      </div>
      <div className="list-group rounded-0 left-boarder-green">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item ps-2"
          >
            <div className="justify-content-between">
              <FaEllipsisV className="mt-4"/><FaRegPenToSquare className="text-success mx-2 mt-4" />{assignment.title}
              <div className="float-end mt-3">
                <BsCheckCircleFill className="text-success me-2" />
                <FaEllipsisV className="mx-2"/>
              </div>
            </div>

            <p className="text-secondary m-0 ms-5">{assignment.course}</p>

          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
