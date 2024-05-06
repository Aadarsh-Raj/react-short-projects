import React from 'react'
import "./Styles/header.css"
const Header = () => {
  return (
    <>
    <header className="header">
        <input type="text" placeholder='Search Challenge'/>
        <select name="" id="">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        </header>
    
    </>
  )
}

export default Header
