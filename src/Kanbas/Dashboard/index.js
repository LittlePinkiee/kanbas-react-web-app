import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
// import "../index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="d-flex flex-column ms-4 mt-2">
      <h1 className="text-secondary m-0">Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 2)}</pre> */}
      <hr />
      <div className="ms-4">
        <h2>Published Courses ({courses.length})</h2>
        <hr />

        <div className="mb-2 pb-2 border-bottom border-2">
          <input
            value={course.name}
            type="text"
            className="form-control mb-1"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-1"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control mb-1"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control mb-1"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />

          <button onClick={addNewCourse} className="btn btn-success">
            Add
          </button>

          <button
            onClick={() => updateCourse(course)}
            className="btn btn-primary ms-2"
          >
            Update
          </button>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {courses.map((course, index) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="btn btn-white"
            >
              <div className="card">
                <img
                  src="/images/react.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-start">
                  <h5 className="card-title text-truncate"  style={{"max-width": "200px"}}>{course.name}</h5>
                  {/* {course.name} */}
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="text-secondary">
                    {course.startDate} to {course.endDate}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-warning"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>

              <button
                className="btn btn-danger ms-2"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}
              >
                Delete
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
