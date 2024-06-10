import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added ${itemName} with the date ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`item deleted ${todoItemName}`);
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
