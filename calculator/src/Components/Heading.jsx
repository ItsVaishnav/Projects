// import { useEffect } from "react";

function Heading(props){
    // useEffect(()=>{
    //     return ()=>{
    //         alert("Heading unmounted");
    //     }
    // },[])
    return <center><h1>{props.heading}</h1></center>;
}

export default Heading;