import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNav";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseBreadcrumb from "./Breadcrumb";
import MobileHomeHeader from "./mobileHomeHeader";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const { pathname } = useLocation();
  console.log(pathname);
  // const [empty, kanbas, courses, id, screen] = pathname.split("/");
  // const course = db.courses.find((course) => course._id === courseId);

  return (
    // <div>
    <div>
      <MobileHomeHeader />
      <CourseBreadcrumb />
      {/* <CourseNavigation /> */}
      <div className="d-flex">
        <CourseNavigation />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
      {/* <MobileHomeHeader />
      <CourseBreadcrumb />
      <CourseNavigation />

      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{
          left: "300px",
          top: "140px",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route
            path="Assignments/editor"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div> */}
    </div>

    // </div>
  );
}

export default Courses;
