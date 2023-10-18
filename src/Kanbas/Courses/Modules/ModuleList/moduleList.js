import React from "react";
import { useParams } from "react-router-dom";
import { BsCheckCircleFill, BsCaretDownFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import db from "../../../Database";
import "./index.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class="list-group mb-4 rounded-0">
      <div class="d-flex justify-content-between border-1 list-group-item-secondary ps-2 py-3 pe-4">
        <div class="d-flex align-items-center">
          <FaEllipsisV className="me-2" />
          Week 0 - INTRO
        </div>
        <div class="d-flex align-items-center">
          <BsCheckCircleFill className="text-success me-1" />
          <BsCaretDownFill className="me-3" />
          <FiPlus className="me-3" />
          <FaEllipsisV />
        </div>
      </div>
      <div class="ps-2 pe-4 d-flex justify-content-between">
        <ul className="list-group">
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <h4>{module.name}</h4>
                <div className="float-end">
                  <BsCheckCircleFill className="text-success me-1" />
                  <FaEllipsisV />
                </div>
                <p>{module.description}</p>
                {
                  module.lessons && (
                    <ul className="list-group list-group-flush">
                      {
                        module.lessons.map((lesson, index) => (
                          <li key={index} className="list-group-item">
                            <h4>{lesson.name}</h4>
                            <p>{lesson.description}</p>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))}
        </ul>
      </div>
    </div >
  );
}
export default ModuleList;

{/* <div class="list-group mb-4 rounded-0">
  <div class="d-flex list-group left-boarder-green mb-5">
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
  </div> */}