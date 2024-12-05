import React from 'react'


export default function TodoInput(props) {
  const {setNewTask, HandleAddTask, newTask} = props;



  return (
    <div class="inputContainer">   
        <input value={newTask} type = "text" placeholder = "Add Task" onChange={(e)=> setNewTask(e.target.value)}/>
        <button class = "add" onClick={HandleAddTask}>Add Task</button>
    </div>
  )
}
