import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddButton from './ToDoList/AddButton';
import Input from './ToDoList/Input';
import Container from './ToDoList/Container';
import List from './ToDoList/List';

function App() {
  let arr = ["Go to school", "study", "play"];
  const [tasks, setTasks] = useState(arr);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      handleOnClick();
    }
  };

  const handleOnClick = () => {
    if (input.trim() !== "" && !tasks.includes(input.trim())) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <Container>
      <h1>TO DO LIST</h1>
      <Input
        handleOnChange={handleOnChange}
        value={input}
        handleOnKeyDown={handleOnKeyDown}
      />
      <AddButton handleOnClick={handleOnClick} />
      <List items={tasks} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;