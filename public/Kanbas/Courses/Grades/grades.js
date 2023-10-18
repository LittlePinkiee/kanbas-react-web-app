import KanbasNavigation from "../../KanbasNavigation/kanbasNav.js";
import CourseNavigation from "../courseNav.js";

function Grades() {

return(`
  <div class="d-flex flex-row h-screen">
    <div class="d-flex flex-column d-none d-md-block" id="navbar-wrapper">
      ${KanbasNavigation()}
    </div>


    <div class="d-flex flex-column p-0 pt-4 pe-5 container-fluid" id="courses-home">
      <div class="d-flex flex-column ps-4">
        <div class="d-flex flex-row align-content-center" id="courses-home-header">
          <i class="solid-bars-icon fa-solid fa-bars text-danger fa-1x pt-1 pe-3" id="course-home-header-icon"></i>
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" class="text-danger text-decoration-none">CS4550.12631.202410</a></li>
              <li class="breadcrumb-item active" aria-current="page">Grades</li>
            </ol>
          </nav>
        </div>
        <hr>
      </div>

      <div class="d-flex flex-row pt-2">
        <div class="d-flex flex-column" id="course-navbar">
          <span class="text-ellipsis text-secondary d-none d-md-block ps-5 pb-2" id="courses-sidebar-title">
            202410_1 Fall 2023 Semester
          </span>
          <ul class="list-group wd-course-navigation d-none d-md-block ">
            <li><a href="/Kanbas/Courses/Home/screen.html">Home</a></li>
            <li><a href="/Kanbas/Courses/Modules/screen.html">Modules</a></li>
            <li><a href="#">Piazza</a></li>
            <li><a href="#">Zome Meetings</a></li>
            <li><a href="/Kanbas/Courses/Assignments/screen.html">Assignments</a></li>
            <li><a href="#">Quizzes</a></li>
            <li class="wd-active"><a href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Panopto Videos</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Announcements</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Files</a></li>
            <li><a href="#">Rubrics</a></li>
            <li><a href="#">Outcomes</a></li>
            <li><a href="#">Collaborations</a></li>
            <li><a href="#">Syllabus</a></li>
            <li><a href="#">Progress Reports (EAB Navigate)</a></li>
            <li><a href="/Kanbas/Courses/Settings/CourseDetails/screen.html">Settings</a></li>
          </ul>
        </div>

        <div class="d-flex flex-column w-full p-0" id="grades-content-wraper">
          <div class="d-flex flex-row ms-auto mb-1" id="course-module-buttons-top">
            <button class="btn btn-secondary me-1" type="button">
              <i class="fa-solid fa-file-import"></i>Import</button>
            <button class="btn btn-secondary me-1" type="button">
              <i class="fa-solid fa-file-export"></i>Export</button>
            <button class="btn btn-secondary me-1" type="button"><i class="fa-solid fa-gear"
                aria-hidden="true"></i></button>
          </div>

          <form action="/Kanbas/Courses/Grades/screen.html">
            <div class="row my-3">
              <div class="col">
                <label for="studentNames" class="form-label">
                  <h6>Student Names</h6>
                </label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input type="text" class="form-select" id="studentNames" name="studentNames"
                    placeholder="Search Students">
                </div>
              </div>
              <div class="col">
                <label for="assignmentNames" class="form-label">
                  <h6>Assignment Names</h6>
                </label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input type="text" class="form-select" id="assignmentNames" name="assignmentNames"
                    placeholder="Search Assignments">
                </div>
              </div>
            </div>
            <button class="btn btn-secondary mb-3">
              <i class="fa-solid fa-filter"></i>
              Apply Filters</button>
          </form>

          <div class="">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover align-middle">
              <thead class="text-nowrap">
                <tr>
                  <th scope="col" class="align-middle text-center">Student Name</th>
                  <th scope="col" class="text-center align-middle fw-normal">
                    <div class="d-flex flex-column">
                      <span>A1 SETUP</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                  <th scope="col" class="align-middle text-center fw-normal">
                    <div class="d-flex flex-column">
                      <span>A2 HTML</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                  <th scope="col" class="align-middle text-center fw-normal">
                    <div class="d-flex flex-column">
                      <span>A3 CSS</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                  <th scope="col" class="align-middle text-center fw-normal">
                    <div class="d-flex flex-column">
                      <span>A4 BOOTSTRAP</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                  <th scope="col" class="align-middle text-center fw-normal">
                    <div class="d-flex flex-column">
                      <span>A5 JAVASCRIPT</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                  <th scope="col" class="align-middle text-center fw-normal">
                    <div class="d-flex flex-column">
                      <span>A6 REACT</span>
                      <span>Out of 100</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a href="#" class="text-decoration-none text-danger fw-normal text-nowrap ps-1">Alice Wonderland</a>
                  </th>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>
                    <div class="d-flex flex-row">
                      <input type="text" class="form-control form-control-sm focus-red me-1" value="98%">
                      <button class="btn btn-light p-1">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                      </button>
                    </div>
                  </td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#" class="text-decoration-none text-danger fw-normal text-nowrap ps-1">Bob Builder</a>
                  </th>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#" class="text-decoration-none text-danger fw-normal text-nowrap ps-1">Charlie Chaplin</a>
                  </th>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td><input value="100" type="number" max="100" min="0" /></td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#" class="text-decoration-none text-danger fw-normal text-nowrap ps-1">Chandler Bing</a>
                  </th>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>


    </div>
  </div>
  </div>`);
}

export default Grades;