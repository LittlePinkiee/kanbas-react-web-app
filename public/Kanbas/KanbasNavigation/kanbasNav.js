function KanbasNavigation(active) {
  const links = [
    // {
    //   name: NEU-logDOM,
    //   url: 
    // },
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
      icon: "fa-regular fa-circle-user fa-2x text-secondary",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
      icon: "fa-solid fa-gauge-high fa-2x",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
      icon: "fa-solid fa-book fa-2x",
    },
    {
      name: "Calendar",
      url: "#",
      icon: "fa-regular fa-calendar-days fa-2x",
    },
    {
      name: "Inbox",
      url: "#",
      icon: "fa-solid fa-inbox fa-2x",
    },
    {
      name: "History",
      url: "#",
      icon: "fa-regular fa-clock fa-2x",
    },
    {
      name: "Studio",
      url: "#",
      icon: "fa-solid fa-tv fa-2x",
    },
    {
      name: "Commons",
      url: "#",
      icon: "fa-solid fa-arrow-right-from-bracket fa-2x",
    },
    {
      name: "Help",
      url: "#",
      icon: "fa-regular fa-circle-question fa-2x",
    },
  ];

  return (`
    <ul class="wd-kanbas-navigation">
      <li>
        <a href="/Kanbas/Courses/Home/screen.html"
          class="neu-logo d-flex align-items-center mb-md-0 text-white text-decoration-none">
          <img width="85" height="75" src="/Kanbas/images/NEU-logo.png" alt="NEU Logo">
        </a>
      </li>

      ${links.map((link) =>
    `<li class="${link.name === active ? "wd-active" : ""}">
        <a href="${link.url}">
        <i class="${link.icon}" aria-hidden="true"></i>
        ${link.name}</a></li>`).join("")
    }
      </ul>`);
}

export default KanbasNavigation;


//   <li class="wd-active">
//     <a href="/Kanbas/Account/Profile/screen.html">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-regular fa-circle-user fa-2x"></i>
//         </span>
//         <div>Account</div>
//       </div>
//     </a>
//   </li>
//   <li><a href="/Kanbas/Dashboard/screen.html">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-solid fa-gauge-high fa-2x"></i>
//         </span>
//         <div>Dashboard</div>
//       </div>
//     </a></li>
//   <li><a href="/Kanbas/Courses/Home/screen.html">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-solid fa-book fa-2x"></i>
//         </span>
//         <div>Courses</div>
//       </div>
//     </a></li>
//   <li>
//     <a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-regular fa-calendar-days fa-2x"></i>
//         </span>
//         <div>Calendar</div>
//       </div>
//     </a>
//   </li>
//   <li><a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-solid fa-inbox fa-2x"></i>
//         </span>
//         <div>Inbox</div>
//       </div>
//     </a></li>
//   <li><a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-regular fa-clock fa-2x"></i>
//         </span>
//         <div>History</div>
//       </div>
//     </a></li>
//   <li><a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-solid fa-tv fa-2x"></i>
//         </span>
//         <div>Studio</div>
//       </div>
//     </a></li>
//   <li><a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-solid fa-arrow-right-from-bracket fa-2x"></i>
//         </span>
//         <div>Commons</div>
//       </div>
//     </a></li>
//   <li><a href="#">
//       <div class="d-flex flex-column align-items-center">
//         <span>
//           <i class="fa-regular fa-circle-question fa-2x"></i>
//         </span>
//         <div>Help</div>
//       </div>
//     </a></li>
// </ul>`);
// }

