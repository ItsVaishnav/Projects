import Listitem from "./Listitem";

function List(props){
    let {sub} = props;
    return <ul className="list-group">
        {sub.map(item => (
            <Listitem item = {item}/>
        ))}
      </ul>;
}

export default List;