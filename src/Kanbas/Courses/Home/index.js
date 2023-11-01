import ModuleList from "../Modules/ModuleList/moduleList";
import ModulesHeader from "../Modules/ModulesHeader";
// import MobileHomeHeader from "../mobileHomeHeader";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div className="d-flex gap-4 mt-3">
      <div className="ms-4 w-full">
        {/* <h2>Home</h2> */}
        {/* <MobileHomeHeader /> */}
        <ModulesHeader />
        <ModuleList />
      </div>
      <div className="w-50">
        {/* <h2>Status</h2> */}
        <CourseStatus />
      </div>
    </div>
    // <div className="row">
    //     <div className="col-8 p-0">
    //         {/* <h2>Home</h2> */}
    //         {/* <MobileHomeHeader/> */}
    //         <ModulesHeader/>
    //         <ModuleList />
    //     </div>
    //     <div className="col-4">
    //         {/* <h2>Status</h2> */}
    //         <CourseStatus/>
    //     </div>
    // </div>
  );
}
export default Home;
