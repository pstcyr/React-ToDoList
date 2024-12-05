import React from 'react'
import { useState, useEffect } from 'react'  


export default function ToDoInput() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");


    useEffect(() => {
      console.log("Updated tasks:", task);
    }, [task]);

    //Event Handler
    const addTask = () => {
        const trimmedTask = newTask.trim();   
        if (trimmedTask === '') return (console.log('Task is empty'));

        // Create call back function that will add a new task to the task array
        setTask((prev) => {
          const updatedTasks = [trimmedTask, ...prev];
          setNewTask('');
          return updatedTasks;
        });
    }


  return (
    <div class="inputContainer">   
        <input value={newTask} type = "text" placeholder = "Add Task" onChange={(e)=> setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}
