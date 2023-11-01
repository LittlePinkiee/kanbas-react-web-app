import React from "react";
import { BsCheckCircleFill, BsBell } from "react-icons/bs";
import { FaFileImport } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TbCurrentLocation } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import "./index.css";

const CourseStatus = () => {
  return (
    <div class="d-flex flex-column d-none d-lg-block ms-3" id="course-status">
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
              <button class="btn btn-light-green" type="button">
                <BsCheckCircleFill className="me-1" />
                Published
              </button>
            </div>
          </div>
        </div>

        <div class="list-group mb-4 bs-no-border gap-2">
          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <FaFileImport />
              </div>
              <a href="#" class="text-secondary">
                Import Existing Content
              </a>
            </div>
          </div>
          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <FaArrowRightFromBracket />
              </div>
              <a href="#" class="text-secondary">
                Import From Commons
              </a>
            </div>
          </div>

          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <TbCurrentLocation />
              </div>
              <a href="#" class="text-secondary">
                Choose Home Page
              </a>
            </div>
          </div>

          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <IoBarChart />
              </div>
              <a href="#" class="text-secondary">
                View Course Stream
              </a>
            </div>
          </div>

          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <CiBullhorn />
              </div>
              <a href="#" class="text-secondary">
                New Announcements
              </a>
            </div>
          </div>

          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <IoBarChart />
              </div>
              <a href="#" class="text-secondary">
                New Analytics
              </a>
            </div>
          </div>

          <div class="list-group-item bg-light border">
            <div class="d-flex gap-2 align-items-center">
              <div class="d-flex align-items-center two-ellipses-icon">
                <BsBell />
              </div>
              <a href="#" class="text-secondary">
                View Course Notifications
              </a>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column mb-4">
          <h5>To Do</h5>
          <hr class="my-0" />
          <div class="list-group list-group-flush">
            <div class="d-flex flex-column list-group-item">
              <a href="#" class="text-danger">
                Grade A1 - ENV + HTML
              </a>
              <span class="text-secondary">100 points - Sep 18 at 11:59pm</span>
            </div>

            <div class="d-flex flex-column list-group-item">
              <a href="#" class="text-danger">
                Grade A2 - CSS
              </a>
              <span class="text-secondary">100 points - Sep 21 at 11:59pm</span>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div class="d-flex flex-row justify-content-between">
            <h5>Comming Up</h5>
            <div class="d-flex flex-row align-content-center">
              <i class="fa-solid fa-calendar-days pt-1 ps-4 pe-2"></i>
              <span>
                <a href="#" class="text-danger link-no-underline">
                  View Calendar
                </a>
              </span>
            </div>
          </div>

          <hr class="my-0" />

          <div class="list-group list-group-flush">
            <div class="d-flex flex-column list-group-item">
              <div class="d-flex flex-row">
                <i class="fa-solid fa-calendar-days pt-1 pe-2"></i>
                <a href="#" class="text-danger">
                  Lecture
                </a>
              </div>

              <span class="text-secondary ps-4">CS4550.12631.202410</span>
              <span class="text-secondary ps-4">Sep 21 at 11:59pm</span>
            </div>

            <div class="d-flex flex-column list-group-item">
              <div class="d-flex flex-row">
                <i class="fa-solid fa-calendar-days pt-1 pe-2"></i>
                <a href="#" class="text-danger">
                  CS5610 06 SP23 Lecture
                </a>
              </div>
              <span class="text-secondary ps-4">CS4550.12631.202410</span>
              <span class="text-secondary ps-4">Sep 21 at 6pm</span>
            </div>

            <span class="pt-5 text-danger">12 more in the next week...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
