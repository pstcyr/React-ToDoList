import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {tasks} = props;

  return (
    <>
    <ul>
      {tasks.map((task, index) => (
        <TodoCard {...props} task={task} key = {index} index={index}></TodoCard>
      ))}
    </ul>
    </>
  )
}
