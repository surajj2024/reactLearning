import { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   //noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   //console.log(noOfUpdates.current);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName}, ${dueDate}`);
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      {/* <div className="row kg-row"> */}
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
