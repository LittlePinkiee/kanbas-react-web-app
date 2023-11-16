import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsCheckCircleFill,
  BsCaretDownFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse, createModule} from "../client";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./../modulesReducer";
import "../../../index.css";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [isModuleCollapsed, setIsModuleCollapsed] = useState(true);

  // const toggleModuleCollapse = (moduleId) => {
  //   setIsModuleCollapsed((prevState) => ({
  //     ...prevState,
  //     [moduleId]: !prevState[moduleId],
  //   }));
  // };

  return (
    <div class="list-group mb-4 ms-3 rounded-0">
      <div className="d-flex flex-column pb-3 mt-3 border-bottom border-2">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />

        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
          className="form-control mt-2"
        />

        <div className="d-flex flex-row mt-2">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="btn btn-success"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}
            className="btn btn-primary ms-2"
          >
            Update
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between border-1 list-group-item-secondary ps-2 py-3 pe-4">
        <div className="d-flex align-items-center">
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
        <ul className="list-group w-full">
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-no-marker">
                <div class="d-flex justify-content-between align-items-center bg-dark-subtle mb-4 py-2">
                  <div class="d-flex align-items-center">
                    <FaEllipsisV className="mx-2" />
                    {!isCollapsed ? (
                      <BsCaretRightFill
                        className="me-1"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                      />
                    ) : (
                      <BsCaretDownFill
                        className="me-1"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                      />
                    )}
                    <h5 className="pt-1">{module.name}</h5>
                  </div>
                  <div>
                    <BsCheckCircleFill className="text-success" />
                    <FaEllipsisV className="mx-2" />
                    <button
                      className="btn btn-warning"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {isCollapsed && (
                  <>
                    <p>{module.description}</p>
                    {module.lessons && module.lessons.length > 0 && (
                      <>
                        <ul className="list-group list-group-flush">
                          {module.lessons.map((lesson) => (
                            <li key={lesson.id} className="list-group-item">
                              <h4>{lesson.name}</h4>
                              <p>{lesson.description}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
