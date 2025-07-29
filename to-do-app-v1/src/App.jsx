import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import ShowTodo2 from "./components/ShowTodo2";
function App() {
  return (
    <>
      <center className="to-do-container">
        <AppName />
        <AddTodo />
        <div class="container text-center">
          <ShowTodo />
          <ShowTodo2 />
        </div>
      </center>
    </>
  );
}

export default App;
