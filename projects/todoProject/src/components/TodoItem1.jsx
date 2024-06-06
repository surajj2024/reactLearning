const TodoItem1 = () => {
  let todoName = "Buy milk";
  let todoDate = "4/10/2023";
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">{todoName}</div>
      <div className="col-span-1">{todoDate}</div>
      <div className="col-span-1">
        <button>DELETE</button>
      </div>
    </div>
  );
};

export default TodoItem1;
