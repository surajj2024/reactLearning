const AddTodo = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Some Text here"
          className="border border-color: rgb(0 0 0);  border-b-indigo-500"
        />
      </div>
      <div className="col-span-1">
        <input
          type="date"
          name=""
          id=""
          placeholder="Enter Some Text here"
          className="border border-color: rgb(0 0 0);  border-b-indigo-500"
        />
      </div>
      <div className="col-span-1">
        <button type="button" className="btn btn-primary">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
