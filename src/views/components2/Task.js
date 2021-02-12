import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",
  paddingBottom: "5px",
}

const taskBtn = {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
}

const btnDeleteI = {
  fontSize: "16px",
  color: "#bbb",
  marginRight: "20px",
}

const btnEditI = {
  fontSize: "16px",
  color: "#bbb",
  marginRight: "20px",
}

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li style={listItem}>
      <span style={{ color: "#c5daff" }}>{task.title} </span>
      <div>
        <button style={taskBtn}
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i style={btnDeleteI} className="fas fa-trash-alt"></i>
        </button>{' '}
        <button style={taskBtn} className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i style={btnEditI} className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  )
} 

export default Task
