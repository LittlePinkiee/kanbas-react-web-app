

function CourseNavigation(active) {

    const links = [
        { name: "Home", url: "/Kanbas/Courses/Home/screen.html" },
        { name: "Module", url: "/Kanbas/Courses/Modules/screen.html" },
        { name: "Piazza", url: "#" },
        { name: "Zoom Meetings", url: "#" },
        { name: "Assignments", url: "/Kanbas/Courses/Assignments/screen.html" },
        { name: "Quizzes", url: "#" },
        { name: "Grades", url: "/Kanbas/Courses/Grades/screen.html" },
        { name: "People", url: "#" },
        { name: "Panopto Videos", url: "#" },
        { name: "Discussions", url: "#" },
        { name: "Announcements", url: "#" },
        { name: "Pages", url: "#" },
        { name: "Files", url: "#" },
        { name: "Rubrics", url: "#" },
        { name: "Outcomes", url: "#" },
        { name: "Collaborations", url: "#" },
        { name: "Syllabus<", url: "#" },
        { name: "Progress Reports (EAB Navigate)", url: "#" },
        { name: "Settings", url: "/Kanbas/Courses/Settings/CourseDetails/screen.html" },
    ];

    return (`<ul class="list-group wd-course-navigation">
        ${links.map((link) =>
            `<li class="${link.name === active ? "wd-active" : ""}">
                <a href="${link.url}">${link.name}</a></li>
        `).join("")}
        </ul>`)
}

export default CourseNavigation;