import React, { useState } from 'react'
import "./Styles/home.css"
import cardarray from "./Assets/tasks.json";
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';
import Header from './Header';
const Home = () => {
const [cardcontainer, setCardContainer] = useState([...cardarray]);
  return (
    <>
    <Header />
  <section className="card-container">
  {
    cardcontainer.map((ele)=>(<Link to={ele.path}><TaskCard key={ele.id} ele={{...ele}}/></Link>))
   }
  </section>
    
    </>
  )
}

export default Home
