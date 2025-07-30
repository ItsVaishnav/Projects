import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import Container from "./components/Container";
function App() {
  const items = [
    {todoname : "Buy Milk",tododate : "20/07/2025"},
    {todoname : "Buy Eggs",tododate : "28/07/2025"},
  ]
  return (
    <>
      <div className="to-do-container text-center conn">
        <Container>
        <AppName />
        </Container>
        <Container>
        <AddTodo />
        <div className="container text-center">
          {items.map(ele=> (
            <ShowTodo key={ele.todoname} element={ele}/>
          ))}
        </div>
        </Container>
      </div>
    </>
  );
}

export default App;
