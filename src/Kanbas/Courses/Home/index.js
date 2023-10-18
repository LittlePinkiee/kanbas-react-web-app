import ModuleList from "../Modules/ModuleList/moduleList";
import ModulesHeader from "../Modules/ModulesHeader";
import CourseStatus from "./CourseStatus";


function Home() {
  return (
    <div className="row">
        <div className="col-8 p-0">
            {/* <h2>Home</h2> */}
            <ModulesHeader/>
            <ModuleList />
        </div>
        <div className="col-4">
            {/* <h2>Status</h2> */}
            <CourseStatus/>
        </div>
    </div>
  );
}
export default Home;