import Styles from './Button.module.css';
function Button({btn,handleOnClick}){
    return (
        <button className={`${Styles.button} btn btn-outline-primary`} onClick={()=>{handleOnClick(btn)}}>{btn}</button>
    );
}
export default Button;