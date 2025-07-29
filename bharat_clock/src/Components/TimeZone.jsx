
function TimeZone(props){
    return (
        <div className="text-center fs-1">This is the time : {props.time.toLocaleDateString()} - {props.time.toLocaleTimeString()}</div>
    );
}

export default TimeZone;