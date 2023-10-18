import KanbasNavigation from "../../KanbasNavigation/kanbasNav.js";
import CourseNavigation from "../courseNav.js";


function Home() {

return (`
  <div class="d-block d-md-none d-flex flex-row bg-black py-3 justify-content-between h-screen">
    <button type="button" class="btn">
      <a href="/Kanbas/KanbasNavigation">
        <i class="fa-solid fa-bars fa-1x me-4 text-white"></i>
      </a>
    </button>

    <div class="d-flex flex-column text-white align-items-center">
      <span>CS4550.12631.20410</span>
      <span class="">Modules</span>
    </div>

    <button type="button" class="btn">
      <a href="/Kanbas/Courses/CourseNavigation">
        <i class="fa-solid fa-glasses pe-1 text-white"></i>
        <i class="fa-solid fa-chevron-down text-white"></i>
      </a>

    </button>
  </div>


  <div class="d-flex flex-row">
    <div class="d-flex flex-column d-none d-md-block" id="navbar-wrapper">
      ${KanbasNavigation()}
    </div>

    <div class="d-flex flex-column p-0 pe-5 container-fluid" id="courses-home">
      <div class="d-flex flex-column ps-4 pt-3">
        <div class="d-flex flex-row align-content-center" id="courses-home-header">
          <i class="solid-bars-icon fa-solid fa-bars text-danger fa-1x pt-1 pe-3" id="course-home-header-icon"></i>
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" class="text-danger text-decoration-none">CS4550.12631.202410</a></li>
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
  
          <div class="ms-auto float-end">
            <a href="#" class="btn btn-secondary">
              <i class="fa-solid fa-glasses"></i>
              Student View
            </a>
          </div>
        </div>
        <hr>
      </div>
      

      <div class="d-flex flex-row pt-2">
        <div class="d-flex flex-column d-none d-md-block" id="course-navbar">
          <span class="text-ellipsis text-secondary d-none d-md-block ps-5 pb-2" id="courses-sidebar-title" >
            202410_1 Fall 2023 Semester
          </span>
          ${CourseNavigation("Home")}
        </div>

        <div class="container-fluid d-flex flex-row w-full p-0 ps-2">
          <section class="d-flex flex-column w-full" id="course-module">
            <div class="d-flex flex-row ms-auto float-end mb-1" id="course-module-buttons-top">
              <button class="btn btn-secondary me-1" type="button">Collapse All</button>
              <button class="btn btn-secondary me-1" type="button">View Progress</button>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false"
                  type="button">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                  Publish All
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Publish selected items</a></li>
                  <li><a class="dropdown-item" href="#">UnPublish</a></li>
                  <li><a class="dropdown-item" href="#">other actions</a></li>
                </ul>
              </div>
              <button class="btn btn-danger me-1" type="button">
                <i class="fa fa-plus" aria-hidden="true"></i>Module</button>
              <button class="btn btn-secondary me-1" type="button"><i class="fa fa-ellipsis-v"
                  aria-hidden="true"></i></button>
            </div>
            <hr>

            <div class="list-group mb-4 rounded-0">
              <div class="d-flex justify-content-between border-1 list-group-item-secondary ps-2 py-3 pe-4">
                <div class="d-flex gap-2">
                  <div class="d-flex align-items-center two-ellipses-icon">
                    <i class="fa-solid fa-ellipsis-v"></i>
                    <i class="fa-solid fa-ellipsis-v"></i>
                    <i class="fa-solid fa-caret-down ms-2"></i>
                  </div>
                  <div class="module-title-week">
                    Week 0 - INTRO
                  </div>
                </div>
                <div class="d-flex align-items-center float-end">
                  <i class="fa fa-check-circle text-success me-1" aria-hidden="true"></i>
                  <i class="fa-solid fa-caret-down me-3"></i>
                  <i class="fa fa-plus me-3" aria-hidden="true"></i>
                  <i class="fa-solid fa-ellipsis-v"></i>
                </div>
              </div>

              <div class="d-flex list-group left-boarder-green mb-5">
                <!-- <ul class="list-group"> -->
                <div class="list-group p-0">

                  <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                    <div class="d-flex">
                      <div class="d-flex align-items-center two-ellipses-icon">
                        <i class="fa-solid fa-ellipsis-v"></i>
                        <i class="fa-solid fa-ellipsis-v"></i>
                      </div>
                      <span class="ps-2">LEARNING OBJECTIVES</span>
                    </div>
                    <div class="d-flex align-items-center float-end">
                      <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>
                  <div class="list-group">
                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Introduction to the course</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Creating a development environment</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Creating a Web Application</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <spanc class="ps-5">Getting started with the 1st assignment</spanc>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="list-group p-0">
                  <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                    <div class="d-flex">
                      <div class="d-flex align-items-center two-ellipses-icon">
                        <i class="fa-solid fa-ellipsis-v"></i>
                        <i class="fa-solid fa-ellipsis-v"></i>
                      </div>
                      <span class="ps-2">READING</span>
                    </div>
                    <div class="d-flex align-items-center float-end">
                      <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>
                  <div class="list-group ">
                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Full Stack Developer - Chapter 1 - Introduction</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <li class="list-group-item">
                    READING
                    <ul class="list-group">
                      <li class="list-group-item">Full Stack Developer - Chapter 1 - Introduction</li>
                      <li class="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                      </li>
                    </ul>
                  </li> -->
                <div class="list-group p-0">
                  <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                    <div class="d-flex">
                      <div class="d-flex align-items-center two-ellipses-icon">
                        <i class="fa-solid fa-ellipsis-v"></i>
                        <i class="fa-solid fa-ellipsis-v"></i>
                      </div>
                      <span class="ps-2">SLIDES</span>
                    </div>
                    <div class="d-flex align-items-center float-end">
                      <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>
                  <div class="list-group ">
                    <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <a href="#" class="ps-5">Introduction to Web Development</a>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <a href="#" class="ps-5">Creating an HTTP server with Node.js</a>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <a href="#" class="ps-5">Creating a React Application</a>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between border-1 list-group-item-secondary ps-2 py-3 pe-4">
                <div class="d-flex gap-2">
                  <div class="d-flex align-items-center two-ellipses-icon">
                    <i class="fa-solid fa-ellipsis-v"></i>
                    <i class="fa-solid fa-ellipsis-v"></i>
                    <i class="fa-solid fa-caret-down ms-2"></i>
                  </div>
                  <div class="module-title-week">
                    Week 1 - HTML
                  </div>
                </div>
                <div class="d-flex align-items-center float-end">
                  <i class="fa fa-check-circle text-success me-1" aria-hidden="true"></i>
                  <i class="fa-solid fa-caret-down me-3"></i>
                  <i class="fa fa-plus me-3" aria-hidden="true"></i>
                  <i class="fa-solid fa-ellipsis-v"></i>
                </div>
              </div>

              <div class="d-flex list-group">
                <!-- <ul class="list-group"> -->
                <div class="list-group p-0 left-boarder-green mb-5">

                  <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                    <div class="d-flex">
                      <div class="d-flex align-items-center two-ellipses-icon">
                        <i class="fa-solid fa-ellipsis-v"></i>
                        <i class="fa-solid fa-ellipsis-v"></i>
                      </div>
                      <span class="ps-2">LEARNING OBJECTIVES</span>
                    </div>
                    <div class="d-flex align-items-center float-end">
                      <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>
                  <div class="list-group ">
                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Learn how to create user interfaces with HTML</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <span class="ps-5">Keep working on assignment 1</span>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                      <div class="d-flex gap-2">
                        <div class="d-flex align-items-center two-ellipses-icon">
                          <i class="fa-solid fa-ellipsis-v"></i>
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </div>
                        <spanc class="ps-5">Deploy the assignment to Netlify</spanc>
                      </div>
                      <div class="d-flex align-items-center float-end">
                        <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>

                    <div class="list-group p-0">
                      <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                        <div class="d-flex">
                          <div class="d-flex align-items-center two-ellipses-icon">
                            <i class="fa-solid fa-ellipsis-v"></i>
                            <i class="fa-solid fa-ellipsis-v"></i>
                          </div>
                          <span class="ps-2">READING</span>
                        </div>
                        <div class="d-flex align-items-center float-end">
                          <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>
                      <div class="list-group ">
                        <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                          <div class="d-flex gap-2">
                            <div class="d-flex align-items-center two-ellipses-icon">
                              <i class="fa-solid fa-ellipsis-v"></i>
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </div>
                            <span class="ps-5">Full Stack Developer - Chapter 1 - Introduction</span>
                          </div>
                          <div class="d-flex align-items-center float-end">
                            <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>

                        <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                          <div class="d-flex gap-2">
                            <div class="d-flex align-items-center two-ellipses-icon">
                              <i class="fa-solid fa-ellipsis-v"></i>
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </div>
                            <span class="ps-5">Full Stack Developer - Chapter 2 - Creating User Interfaces With
                              HTML</span>
                          </div>
                          <div class="d-flex align-items-center float-end">
                            <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="list-group p-0">
                      <div class="list-group-item ps-2 pe-4 d-flex justify-content-between">
                        <div class="d-flex">
                          <div class="d-flex align-items-center two-ellipses-icon">
                            <i class="fa-solid fa-ellipsis-v"></i>
                            <i class="fa-solid fa-ellipsis-v"></i>
                          </div>
                          <span class="ps-2">SLIDES</span>
                        </div>
                        <div class="d-flex align-items-center float-end">
                          <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>
                      <div class="list-group ">
                        <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                          <div class="d-flex gap-2">
                            <div class="d-flex align-items-center two-ellipses-icon">
                              <i class="fa-solid fa-ellipsis-v"></i>
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </div>
                            <a href="#" class="ps-5">Introduction to HTML and the DOM</a>
                          </div>
                          <div class="d-flex align-items-center float-end">
                            <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>

                        <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                          <div class="d-flex gap-2">
                            <div class="d-flex align-items-center two-ellipses-icon">
                              <i class="fa-solid fa-ellipsis-v"></i>
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </div>
                            <a href="#" class="ps-5">Formatting Web content with Headings and Paragraphs</a>
                          </div>
                          <div class="d-flex align-items-center float-end">
                            <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>

                        <div class="list-group-item list-group-item-action ps-2 pe-4 d-flex justify-content-between">
                          <div class="d-flex gap-2">
                            <div class="d-flex align-items-center two-ellipses-icon">
                              <i class="fa-solid fa-ellipsis-v"></i>
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </div>
                            <a href="#" class="ps-5">Formatting content with Lists and Tables</a>
                          </div>
                          <div class="d-flex align-items-center float-end">
                            <i class="fa fa-check-circle text-success me-3 float-end" aria-hidden="true"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="d-flex flex-column d-none d-lg-block ms-5" id="course-status">

            <div class="d-flex flex-column course-status-width">
              <div class="d-flex flex-column mb-3">
                <h5>Course Status</h5>

                <div class="d-flex flex-row">
                  <div class="d-flex flex-column w-full">
                    <button class="btn btn-secondary btn-square" type="button">
                      <i class="fa-solid fa-ban"></i>
                      UnPublish
                    </button>
                  </div>

                  <div class="d-flex flex-column w-full">
                    <button class="btn btn-square btn-light-green" type="button">
                      <i class="fa fa-check-circle text-light" aria-hidden="true"></i>
                      Published
                    </button>
                  </div>
                </div>
              </div>

              <div class="list-group mb-4 bs-no-border gap-2">
                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-file-import"></i>
                    </div>
                    <a href="#" class="text-secondary">Import Existing Content</a>
                  </div>
                </div>
                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </div>
                    <a href="#" class="text-secondary">Import From Commons</a>
                  </div>
                </div>

                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-location-crosshairs"></i>
                    </div>
                    <a href="#" class="text-secondary">Choose Home Page</a>
                  </div>
                </div>

                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <a href="#" class="text-secondary">View Course Stream</a>
                  </div>
                </div>

                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <a href="#" class="text-secondary">New Announcements</a>
                  </div>
                </div>

                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <a href="#" class="text-secondary">New Analytics</a>
                  </div>
                </div>

                <div class="list-group-item bg-light border">
                  <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center two-ellipses-icon">
                      <i class="fa-regular fa-bell"></i>
                    </div>
                    <a href="#" class="text-secondary">View Course Notifications</a>
                  </div>
                </div>
                <!-- <li class="list-group-item"><a href="#">Import From Commons</a></li>
                <li class="list-group-item"><a href="#">Choose Home Page</a></li>
                <li class="list-group-item"><a href="#">View Course Stream</a></li>
                <li class="list-group-item"><a href="#">New Announcements</a></li>
                <li class="list-group-item"><a href="#">New Analytics</a></li>
                <li class="list-group-item"><a href="#">View Course Notifications</a></li> -->
              </div>

              <div class="d-flex flex-column mb-4">
                <h5>To Do</h5>
                <hr class="my-0">

                <div class="list-group list-group-flush">
                  <div class="d-flex flex-column list-group-item">
                    <a href="#" class="text-danger">Grade A1 - ENV + HTML</a>
                    <span class="text-secondary">
                      100 points - Sep 18 at 11:59pm
                    </span>
                  </div>

                  <div class="d-flex flex-column list-group-item">
                    <a href="#" class="text-danger">Grade A2 - CSS</a>
                    <span class="text-secondary">
                      100 points - Sep 21 at 11:59pm
                    </span>
                  </div>
                </div>

              </div>

              <div class="d-flex flex-column">
                <div class="d-flex flex-row justify-content-between">
                  <h5>Comming Up</h5>
                  <div class="d-flex flex-row align-content-center">
                    <i class="fa-solid fa-calendar-days pt-1 ps-4 pe-2"></i>
                    <span><a href="#" class="text-danger link-no-underline">View Calendar</a></span>
                  </div>

                </div>

                <hr class="my-0">

                <div class="list-group list-group-flush">
                  <div class="d-flex flex-column list-group-item">
                    <div class="d-flex flex-row">
                      <i class="fa-solid fa-calendar-days pt-1 pe-2"></i>
                      <a href="#" class="text-danger">Lecture</a>
                    </div>

                    <span class="text-secondary ps-4">
                      CS4550.12631.202410</span>
                    <span class="text-secondary ps-4">Sep 21 at 11:59pm</span>
                  </div>

                  <div class="d-flex flex-column list-group-item">
                    <div class="d-flex flex-row">

                      <i class="fa-solid fa-calendar-days pt-1 pe-2"></i>
                      <a href="#" class="text-danger">CS5610 06 SP23 Lecture</a>
                    </div>
                    <span class="text-secondary ps-4">
                      CS4550.12631.202410</span>
                    <span class="text-secondary ps-4">Sep 21 at 6pm</span>
                  </div>

                  <span class="pt-5 text-danger">12 more in the next week...</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

`);
}
export default Home;