import TodoInput from "./components/TodoInput"
import ToDoList from "./components/TodoList"
import {useState, useEffect} from 'react'


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);

  //Event Add Handler
  const HandleAddTask = () => {
      const trimmedTask = newTask.trim();   
      if (trimmedTask === '') return (console.log('Task is empty'));
      // Create call back function that will add a new task to the task array
      setTasks((prev) => {
        const updatedTasks = [trimmedTask, ...prev];
        setNewTask('');
        return updatedTasks;
      });
  }


  //Event Edit Handler
  const handleEditTask = (index) => {
      const updateInput = tasks[index];
      setNewTask(updateInput);
      handleDeleteTask(index);
  }

  //Event Delete Handler
  const handleDeleteTask = (index) => {
    setTasks((prev) => {
      const updatedTasks = prev.filter((task,i)=> i !== index);
      return updatedTasks;
    });
  }



  return (
    <>
    <div class="background">
      <TodoInput newTask = {newTask} setNewTask = {setNewTask} HandleAddTask= {HandleAddTask}/>
      <ToDoList tasks = {tasks} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>
    </div>
    </>
  )
}

export default App
