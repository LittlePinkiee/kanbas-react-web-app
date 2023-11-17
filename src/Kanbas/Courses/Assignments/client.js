import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
const ASSIGNMENT_URL = "http://localhost:4000/api/assignments";

export const createAssignment = async (cid, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${cid}/assignment`,
    assignment
  );
  return response.data;
}

// get all assignments for a course

// export const updateModule = async (module) => {
//   const response = await axios.
//     put(`${MODULES_URL}/${module._id}`, module);
//   return response.data;
// };

// export const deleteModule = async (moduleId) => {
//   const response = await axios
//     .delete(`${MODULES_URL}/${moduleId}`);
//     console.log("response", response.data)
//   return response.data;
// };

// export const createModule = async (courseId, module) => {
//   const response = await axios.post(
//     `${COURSES_URL}/${courseId}/modules`,
//     module
//   );
//   return response.data;
// };

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
