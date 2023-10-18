import db from "../Database";
import { Link } from "react-router-dom";


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="d-flex flex-column ms-4 mt-2">
      <h1 className="text-secondary">Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 2)}</pre> */}
      <hr />
      <div className="ms-4">
        <h2>Published Courses ({courses.length})</h2>
        <hr />

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {courses.map((course, index) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="btn btn-white"
            >
              <div class="card">
                <img src="/images/react.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{course.name}</h5>
                  {course.name}
                  <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

              </div>
            </Link>


          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;