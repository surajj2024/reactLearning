import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

export default function App() {
  return (
    <div className="container">
      <center className="text-3xl font-bold underline todo-container">
        <AppName />
      </center>
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </div>
  );
}
