function ShowTodo2(){
    let todoname = "Buy Eggs";
    let tododate = "12/06/2025";
    return <>
        <div class="container text-center">
      <div class="row my-4">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
    </>;
}

export default ShowTodo2;