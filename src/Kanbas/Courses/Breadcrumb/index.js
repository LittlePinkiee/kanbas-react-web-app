import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./index.css";

const CourseBreadcrumb = () => {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);
  const [empty, kanbas, courses, _id, screen] = pathname.split("/");

  return (
    <div className="mt-3 px-4 w-full">
      {/* <i class="solid-bars-icon fa-solid fa-bars text-danger fa-1x pt-1 pe-3" id="course-home-header-icon"></i> */}
      <nav
        className="course-breadcrumb border-bottom border-1 d-none d-md-flex justify-content-between"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to={`${pathname.split("/")}`}>
              <FiMenu className="me-3" />
              {courseId}
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {screen}
          </li>
        </ol>
        {screen === "Modules" || screen === "Home"? (
          <div className=""><button className="btn btn-secondary">Student View</button></div>
        ) : null}
      </nav>
    </div>
  );
};

export default CourseBreadcrumb;
