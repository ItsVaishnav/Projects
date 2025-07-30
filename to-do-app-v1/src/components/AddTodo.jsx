import styles from "./AddTodo.module.css";
import classNames from 'classnames';
function AddTodo() {
  return (
    // <div className={styles.conn}>
    <div className={`${styles.conn} ${styles.color}`}>
    {/* <div className={classNames(styles.color, styles.conn)}> */}
    <div className="container text-center">
      <div className="row my-4">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter To Do Here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
