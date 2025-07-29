import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import TitlePart from "./Components/TitlePart";
import SubText from "./Components/SubText";
import TimeZone from "./Components/TimeZone";
function App() {
  // let time = new Date();
  const [time, setTime] = useState(new Date());
  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return (
    <>
      <NavBar />
      <TitlePart />
      <SubText />
      <TimeZone time={time} />
     
    </>
  );
}
export default App;
