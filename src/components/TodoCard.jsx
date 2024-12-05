import React from 'react'
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg'

export default function TodoCard(props) {
  const {task, index, handleDeleteTask, handleEditTask} = props;

  return (
    <div class="inputCard">
      {task}
      <img src={trashIcon}  onClick={() => handleDeleteTask(index)}></img>
      <img src={editIcon} onClick={() => handleEditTask(index)}></img>
    </div>
  )
}
