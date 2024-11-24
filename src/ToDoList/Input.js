import style from './Container.module.css';

function Input({ handleOnChange, handleOnKeyDown, value }) {
  return (
    <input
      type="text"
      placeholder="Enter your task"
      className={style.Input}
      value={value} // Bind the input value here
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  );
}

export default Input;