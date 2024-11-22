// LiveInput.js
function Input({ value, handleOnChange }) {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={handleOnChange} 
      placeholder="Add a new food item" 
    />
  );
}

export default Input;