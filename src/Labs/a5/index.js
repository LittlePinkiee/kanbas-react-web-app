import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const LAB_URL = `https://kanbas-node-server-app-ugzg.onrender.com/a5`;

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${LAB_URL}/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;