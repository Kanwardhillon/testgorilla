import React from 'react'
import './QuestionContainer.css'

const QuestionContainer = () => {
  return (
    <div className='questioncontainer'>

      {/* question part */}
      <div className='questioncontainer_left'>
        <div className='questioncontainer_question'>
          <p >What is the main point of message below?</p>
          <div className='questioncontainer_message'>
            <p> <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em> </p>
          </div>
        </div>
      </div>

      {/* answer Part */}
      <div className='questioncontainer_right'>
        <div className='questioncontainer_options'>
          <p>SELECT ONLY ONE</p>

          <div className='questioncontainer_answer'>
            <ul type='button'>
              <li><input type='radio' />option 1</li>
              <li><input type='radio' />option 2</li>
              <li><input type='radio' />option 3</li>
              <li><input type='radio' />option 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionContainer
