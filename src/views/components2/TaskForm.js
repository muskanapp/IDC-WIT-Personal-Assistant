import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const btn = {
  margin: "10px",
  width: "350px"
}

const addTaskBtn = {
  minWidth: "100px",
  backgroundColor: "#007BFF",
  color: "#ccc",
  border: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "14px",
  borderRadius: "20px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  outline: "none",
  cursor: "pointer",
}

const clearBtn = {
  width: "100px",
  marginLeft : "5px",
  height: "3opx",
  backgroundColor: "#007BFF",
  color: "#ccc",
  border: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "14px",
  borderRadius: "20px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  outline: "none",
  cursor: "pointer",
}

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        style={btn}
      />
      <div className="buttons">
        <button  style={addTaskBtn} type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button style={clearBtn} className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
