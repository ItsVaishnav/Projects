import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import Styles from './Outer.module.css';
function Outer(props){
    const [value , setValue] = useState('');

    const HandleOnChange = (event) =>{
        console.log(event.target.value);
        setValue(event.target.value);
    }

    const handleOnClick = (item) =>{
        setTime(0)
        if(item === '='){
            let newValue = eval(value);
            setValue(newValue);
        }else if(item === 'C'){
            setValue('');
        }else{
            let newValue = value + item;
            setValue(newValue);
        }
        console.log("Clicked : "+item);
    }

    // useEffect(()=>{alert("On condition")},[value]);
    // useEffect(()=>{alert("Only first time")},[]);
    // useEffect(()=>{alert("Every Paint ...!")});
    
    const [time , setTime] = useState(0);
    
    useEffect(()=>{
        let interval = setInterval(
            ()=>{setTime(time+1)}
            ,1000);
        console.log(interval);

        return ()=>{clearInterval(interval)};
        
    },[time]);

    // useEffect(() => {

    // setInterval(()=>{console.log('Callled');} , 1000);
    
    // const timer = setInterval(() => {
    //     console.log("Tick");
    // }, 1000);

    // return () => {
    //     clearInterval(timer); // cleanup
    //     console.log("Timer cleared");
    // };
    // }, []);



    return <>
        <div className={`${Styles.container} border border-info border-3 rounded`}>
            <Input value={value} HandleOnChange={HandleOnChange}></Input>            
            <div className={`${Styles.flex}`}>
                {props.arr.map(ele => (
                    <Button btn={ele} key={ele} handleOnClick={handleOnClick} ></Button>
                ))}
                
            </div>
            <h1>{time}</h1>
        </div>
    </>
}
export default Outer;