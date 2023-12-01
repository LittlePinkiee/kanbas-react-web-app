import { Route, Routes, Navigate } from "react-router";
import Nav from "../Nav";
import ProjectNav from "./projectNav";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";

function Project() {
  return (
    <div className="row">
      <Nav />
      <div className="col-2">
        <ProjectNav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default Project;
