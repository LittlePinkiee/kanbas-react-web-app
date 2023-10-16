import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
// import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList"


function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList/>
      {/* <TodoItem/> */}
      <ConditionalOutput/>
      <Styles/>
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;