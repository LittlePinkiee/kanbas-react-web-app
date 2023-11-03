import ModuleList from "./ModuleList/moduleList";
import ModulesHeader from "./ModulesHeader";

function Modules() {
  return (
    <div className="mt-3">
      {/* <h2>Modules</h2> */}
      <ModulesHeader/>
      <ModuleList />
    </div>
  );
}
export default Modules;