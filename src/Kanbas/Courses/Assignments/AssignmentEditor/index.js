import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import AssignmentEditorHeader from "./AssignmentEditorHeader";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <AssignmentEditorHeader />
      <div class="d-flex flex-column my-4 me-3">
        <label for="inputAssignmentName" class="form-label ms-1">Assignment Name</label>
        <input type="text" id="inputAssignmentName" value={assignment.title}
          className="form-control mb-4" />
        <textarea class="form-control" id="assignmentDesc" rows="3">This is the assignment description.</textarea>
      </div>
      {/* <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" /> */}

      <div class="table-responsive me-5 border-bottom border-2">
        <table className="table table-borderless table-hover align-middle pe-5">
          <tbody className="pe-5">
            <tr>
              <th scope="row" class="text-nowrap ps-1 text-end fw-normal">Points</th>
              <td><input type="n" id="inputPoints" class="form-control" /></td>
            </tr>
            <tr>
              <th scope="row" class="text-nowrap ps-1 text-end fw-normal">Assignment Group</th>
              <td><select class="form-select">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </select></td>
            </tr>

            <tr>
              <th scope="row" class="text-nowrap ps-1 text-end fw-normal">Display Grade as</th>
              <td>
                <select class="form-select">
                  <option>Percentage</option>
                  <option>Number</option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" class="text-nowrap ps-1 text-end fw-normal">Submission Type</th>
              <td>
                <div class="d-flex gap-4">
                  <div class="card card-width">
                    <div class="p-2 d-flex flex-column">
                      <select class="form-select">
                        <option>Online</option>
                        <option>In Class</option>
                      </select>
                    </div>
                    <div class="d-flex flex-column ps-3">
                      <label for="onlineEntryOptions" class="py-3">Online Entry Options</label>
                      <div class="d-flex flex-row">
                        <input type="checkbox" value="textEntry" name="textEntry" id="chkbox-textEntry" checked />
                        <label for="chkbox-textEntry" class="ps-4">Text Entry</label>
                      </div>

                      <div class="d-flex flex-row">
                        <input type="checkbox" value="WebsiteURL" name="websiteURL" id="chkbox-websiteURL" checked />
                        <label for="chkbox-websiteURL" class="ps-4">Website URL</label>
                      </div>

                      <div class="d-flex flex-row">
                        <input type="checkbox" value="mediaRecodings" name="mediaRecodings" id="chkbox-mediaRecodings"
                          checked />
                        <label for="chkbox-mediaRecodings" class="ps-4">Media Recordings</label>
                      </div>

                      <div class="d-flex flex-row">
                        <input type="checkbox" value="fileUploads" name="fileUploads" id="chkbox-fileUploads" />
                        <label for="chkbox-fileUploads" class="ps-4">File Uploads</label>
                      </div>

                      <div class="d-flex flex-row">
                        <input type="checkbox" value="textEntry" name="textEntry" id="chkbox-textEntry" />
                        <label for="chkbox-textEntry" class="ps-4">Text Entry</label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row" class="text-nowrap ps-1 text-end fw-normal">Assign</th>
              <td>
                <div class="d-flex gap-4">
                  <div class="card card-width">
                    <div class="p-2 d-flex flex-column">
                      <label for="assignTo">Assign To</label>
                      <div class="card p-2">
                        <div class="p-1 d-flex justify-content-between align-items-center wd-bg-color-gary card-in-card-width">
                          <div class="btn btn-light">
                            Everyone<i class="fa-solid fa-xmark ps-1"></i>
                          </div>
                        </div>
                      </div>
                      <label for="dueDate" class="mt-3">Due Date</label>
                      <input type="date" value="2020-09-16" min="2020-09-04" max="2020-09-23" />

                      <div class="mt-3 d-flex gap-2">
                        <div class="d-flex flex-column w-full">
                          <label for="availableFrom">Available From</label>
                          <input type="date" value="2020-09-16" min="2020-09-04" max="2020-09-23" />
                        </div>

                        <div class="d-flex flex-column w-full pb-3">
                          <label for="until">Until</label>
                          <input type="date" value="2020-09-16" min="2020-09-04" max="2020-09-23" />
                        </div>
                      </div>
                    </div>

                    <div class="btn btn-secondary rounded-0">
                      <i class="fa-solid fa-plus"></i> Add
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom border-2">
        <div class="d-flex align-items-center">
          <input type="checkbox" value="editAssignmentFooter" name="fileUploads" id="chkbox-editAssignmentFooter" />
          <label for="chkbox-editAssignmentFooter" class="ps-2">
            Notify users that this content has changed
          </label>
        </div>

        <div class="d-flex align-items-center">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
            Cancel
          </Link>
          {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
          <button onClick={handleSave} className="btn btn-success mx-2">
            Save
          </button>
        </div>
      </div>

    </div>
  );
}


export default AssignmentEditor;