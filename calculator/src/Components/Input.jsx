import styles from './Input.module.css';
function Input({value, HandleOnChange}){
  return <input type="text" className={`${styles.width} form-control border-primary p-2 mb-3`} value={value} onChange={()=>{HandleOnChange(event)}} readOnly></input>;
}
export default Input;