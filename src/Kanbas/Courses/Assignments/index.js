import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import db from "../../Database";
import AssignmentHeader from "./AssignmentHeader";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import "../../index.css";

function Assignments() {
  const { courseId } = useParams();

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const dispatch = useDispatch();
  // const handleAddAssignment = () => {
  //   client.createAssignment(courseId, assignment).then((assignment) => {
  //     dispatch(addAssignment({ ...assignment, course: courseId }));
  //   });
  // };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="list-group m-3 rounded-0">
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
          <div className="list-group-item d-flex flex-row ps-2">
            <Link
              key={assignment._id}
              onClick={() => dispatch(setAssignment(assignment))}
              to={`/Kanbas/Courses/${courseId}/Assignments/editAssignment`}
              className="text-decoration-none text-black"
            >
              <div className="d-flex flex-row">
                <FaEllipsisV className="mt-4 p-0" />
                <FaRegPenToSquare className="text-success mx-2 mt-4" />
                <div className="d-flex flex-column pt-1 ms-3">
                  {assignment.title}
                  <p className="text-secondary m-0">
                    Available: {assignment.startDate} -- Due:{" "}
                    {assignment.dueDate} at {assignment.dueTime}
                  </p>
                  <p className="text-secondary m-0">
                    Points: {assignment.points}
                  </p>
                </div>
              </div>
            </Link>
            <div className="ms-auto pt-3">
              <BsCheckCircleFill className="text-success me-2" />
              <FaEllipsisV className="mx-2" />
              <RiDeleteBin5Line
                className="text-danger"
                onClick={() => handleDeleteAssignment(assignment._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
