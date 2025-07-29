import Error from "./Components/Error";
import Heading from "./Components/Heading";
import List from "./Components/List";

function App() {
    let sub = ["Maths", "Science", "Commerce", "Arts","Java"];
  return (
    <>
      <Heading/>
      <Error sub={sub}/>
      <List sub={sub}/>
    </>
  )
}

export default App;