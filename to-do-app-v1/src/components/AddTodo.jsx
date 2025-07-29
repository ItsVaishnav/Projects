function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row my-4">
        <div class="col-6">
          <input type="text" name="" id="" placeholder="Enter To Do Here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
