import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";


function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Grades",
    "Quizzes",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB navigate)",
    "Settings",
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div class="wd-course-navigation list-group pt-2 d-flex d-none d-md-block" id="course-navbar">
      <span class="text-ellipsis text-secondary d-none d-md-block ps-4 pt-2" id="courses-sidebar-title">
        202410_1 Fall 2023 Semester
      </span>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;