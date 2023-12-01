import { Route, Routes, Navigate } from "react-router";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const API_BASE = process.env.REACT_APP_BASE_API_URL;
  const URL = `${API_BASE}/api/courses`;
  // const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);

    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    try {
      const response = await axios.put(`${URL}/${course._id}`, course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return response.data;
          } else {
            return c;
          }
        })
      );
    } catch (error) {
      console.log("error", error.response.data);
    }
  };

  return (
    <Provider store={store}>
      {/* <> */}
      <Nav />
      <div className="d-flex h-screen">
        <div className="h-full">
          <KanbasNavigation className="h-full" />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
      {/* </> */}
    </Provider>
  );
}
export default Kanbas;
