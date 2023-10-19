import { Link, useLocation } from "react-router-dom";
import { FaBook, FaInbox } from "react-icons/fa";
import { FaRegCircleUser, FaGaugeHigh, FaRightFromBracket, FaRegClock } from "react-icons/fa6";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { MdOutlineOndemandVideo, MdHelpOutline } from "react-icons/md";
import "./index.css";



function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <FaRegCircleUser className="account-icon" />,
        Dashboard: <FaGaugeHigh className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <FaInbox className="wd-icon" />,
        History: <FaRegClock className="wd-icon" />,
        Studio: <MdOutlineOndemandVideo className="wd-icon" />,
        Commons: <FaRightFromBracket className="wd-icon" />,
        Help: <MdHelpOutline className="wd-icon" />,
    };

    const { pathname } = useLocation();
    return (
      <div
        className="d-flex flex-column d-none d-md-block h-full"
        id="kanbas-navbar"
      >
        <ul className="list-group wd-kanbas-navigation h-full">
          <li>
            <a href="/Kanbas/Dashboard" class="neu-logo d-flex mb-md-0">
              <img
                width="80"
                height="75"
                src="/images/NEU-logo.png"
                alt="NEU Logo"
              />
            </a>
          </li>
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/${link}`}
              className={`list-group-item ${
                pathname.includes(link) && "active"
              }`}
            >
              {linkToIconMap[link]}
              <br />
              {link}
            </Link>
          ))}
        </ul>
      </div>
    );
}
export default KanbasNavigation;