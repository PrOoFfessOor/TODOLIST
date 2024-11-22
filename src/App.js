import Input from './components/LiveInput'
import Container from './components/Container'
import Add from './Add';
import List from "./components/List";
import { useState } from 'react';

function App() {
  // Initial items in the ToDo list
  let arr = ["rice ", "dal", "salt", "paneer"];

  // State for ToDoList and the input value
  let [ToDoList, SetToDoList] = useState(arr);
  let [inputValue, setInputValue] = useState("");  // State for input value

  // Handle input change (from Input component)
  let handleOnChange = (e) => {
    setInputValue(e.target.value);  // Update the input value
  };

  // Handle Add button click
  let handleAdd = () => {
    if (inputValue.trim() !== "") {  // Ensure the input isn't empty
      SetToDoList([...ToDoList, inputValue]);  // Add the new item to the list
      setInputValue("");  // Clear input field after adding
    }
  };

  return (
    <Container>
      <h1>Healthy Food</h1>
      <Input value={inputValue} handleOnChange={handleOnChange} />  {/* Pass value and onChange handler */}
      <Add handleAdd={handleAdd} />  {/* Pass the handleAdd function */}
      <List item={ToDoList} />  {/* Display the ToDoList */}
    </Container>
  );
}

export default App;