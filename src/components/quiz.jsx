import React, { useState } from 'react';
import questions from '../data/questions.json'
import Timer from '../components/timer'


export default function Quiz() {
    
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);
  
  const [score, setScore] = useState(0);


  const handleButtonOnClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if(isCorrect === true){
      setScore(score + 1);
    }
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  } 

	return (                 
		<div className='app'>
			{showScore ? (
                <div>
                    <div className='score-section'>You scored {score} out of {questions.length}</div>
                    <button className='submit' onClick={() => window.location.reload(false)}>Click to reload!</button>
                </div>
                
			) : (
                
				<>
                  
					<div className='question-section'>
                        <Timer seconds={180}/>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=>
                        <button onClick={() => handleButtonOnClick(answerOption.isCorrect)}>{answerOption.answerText}</button> )}
					</div>
                    
				</>
			)}
		</div>
	);
}