import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className='container'>
      <h2 className="heading">Quiz App</h2>
      <Link to="/QuizComponent"> 
        <button className="playbutton">Play Quiz</button>
      </Link>
    </div>
  );
}
