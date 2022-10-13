import React, { useState } from 'react'
import './QuestionContainer.css'
import data from '../data/data.json'

const QuestionContainer = ({ question, questionText, answerOptions }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    if (answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }


  return (
    <div className='questioncontainer'>
      {showScore ? (
        <div className='score'>Your score is {score} out of {data.length}</div>
      ) : <>

        {/* question part */}
        <div className='questioncontainer_left'>
          <div className='questioncontainer_question'>
            <p  ><span> Question {currentQuestion + 1} </span>/{data.length}</p>
            <div className='questioncontainer_message'>
              <p> <em>{data[currentQuestion].questionText}</em> </p>
            </div>
          </div>
        </div>

        {/* answer Part */}
        <div className='questioncontainer_right'>
          <div className='questioncontainer_options'>
            <p>SELECT ONLY ONE</p>

            <div className='questioncontainer_answer'>
              <ul type='button'>
                {data[currentQuestion].answerOptions.map(answerOption => {
                  return <li
                    key={answerOption.id}
                    onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                    <input type='radio' />
                    <span>{answerOption.answerText}</span>
                  </li>
                })}

              </ul>
            </div>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default QuestionContainer
