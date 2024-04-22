import React from 'react';
import { Link } from 'react-router-dom';

export default function ResultComponent() {
    const score = localStorage.getItem('score') || 0;
    let attempted = localStorage.getItem('attempted') || 0;
    const remarks = (percent) => {
        switch (true) {
            case percent <= 30:
                return "You need Practice!";
            case percent <= 60:
                return "You did a good job!";
            case percent <= 90:
                return "Almost there!";
            case percent > 90:
                return "Perfect!!";
            default:
                return "";
        }
    };
    const percentage = (score / 15) * 100;
    if (attempted < 0) {
        attempted = 0;
    }
    return (
        <div className='resultContainer'>
            <h1 className='Result'>Result</h1>
            <div className='quizBox'>
                <h2>{remarks(percentage)}</h2>
                <h1 className='score'>Your Score is {(percentage).toFixed(1)}%</h1>
                <div className='stats'>
                    <div className='stat'>
                        <span>Total number of questions</span>
                        <span className='num'>15</span>
                    </div>
                    <div className='stat'>
                        <span>Number of attempted questions</span>
                        <span className='num'>{attempted}</span>
                    </div>
                    <div className='stat'>
                        <span>Number of correct answers</span>
                        <span className='num'>{score}</span>
                    </div>
                    <div className='stat'>
                        <span>Number of wrong answers</span>
                        <span className='num'>{attempted - score}</span>
                    </div>
                </div>
            </div>
            <div className="Controls">
                <Link to="/QuizComponent">
                    <button className="playagain">Play Again</button>
                </Link>
                <Link to="/">
                    <button className="home">Back to Home</button>
                </Link>
            </div>
        </div>
    );
}
