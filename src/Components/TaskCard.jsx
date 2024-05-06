import React from 'react'
import "./Styles/taskcard.css"
const TaskCard = ({ele}) => {
  return (
    <>
    <div className="task-card">
        <h3>{ele.name}</h3>
        <p>{ele.level}</p>
    </div>
    
    </>
  )
}

export default TaskCard
