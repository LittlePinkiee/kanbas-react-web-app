import React from "react";
import {FaFileImport, FaFileExport} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";
import {FaMagnifyingGlass} from "react-icons/fa6";


const GradesHeader = () => {
    return (
        <div>
            <div class="d-flex justify-content-end ms-auto mb-1" id="course-module-buttons-top">
            <button class="btn btn-secondary me-1" type="button">
              <FaFileImport/>Import</button>
            <button class="btn btn-secondary me-1" type="button">
              <FaFileExport/>Export</button>
            <button class="btn btn-secondary me-1" type="button"><AiFillSetting/></button>
          </div>

          <form action="/Kanbas/Courses/Grades/screen.html">
            <div class="row my-3">
              <div class="col">
                <label for="studentNames" class="form-label">
                  <h6>Student Names</h6>
                </label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent">
                    <FaMagnifyingGlass/>
                  </span>
                  <input type="text" class="form-select" id="studentNames" name="studentNames"
                    placeholder="Search Students"/>
                </div>
              </div>
              <div class="col">
                <label for="assignmentNames" class="form-label">
                  <h6>Assignment Names</h6>
                </label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent">
                  <FaMagnifyingGlass/>
                  </span>
                  <input type="text" class="form-select" id="assignmentNames" name="assignmentNames"
                    placeholder="Search Assignments"/>
                </div>
              </div>
            </div>
            <button class="btn btn-secondary mb-3">
              <i class="fa-solid fa-filter"></i>
              Apply Filters</button>
          </form>
        </div>
    )
};


export default GradesHeader;