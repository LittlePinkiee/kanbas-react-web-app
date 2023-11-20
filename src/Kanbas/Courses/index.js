import { useState, useEffect } from "react";
import axios from "axios";
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

function Courses() {
  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const { pathname } = useLocation();
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
              path="Assignments/editAssignment"
              element={<AssignmentEditor />}
            />
            <Route
              path="Assignments/addAssignment"
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
