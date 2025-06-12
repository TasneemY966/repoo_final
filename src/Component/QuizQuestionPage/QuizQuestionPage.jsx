// QuizQuestionPage.jsx
import React, { useState } from 'react';
import { Plus, Star, Trash2, Play } from 'lucide-react';
import './QuizQuestionPage.css';

 function QuizQuestionPage  ()  {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: 'Option 1', id: 1 }]);
  const [newOption, setNewOption] = useState('');
  const [questionType, setQuestionType] = useState('Multiple Choice');
  const [timeToAppear, setTimeToAppear] = useState('');
  
  const addOption = () => {
    if (newOption.trim() !== '') {
      setOptions([...options, { text: newOption, id: Date.now() }]);
      setNewOption('');
    } else {
      // Add empty option
      setOptions([...options, { text: `Option ${options.length + 1}`, id: Date.now() }]);
    }
  };

  const removeOption = (id) => {
    setOptions(options.filter(option => option.id !== id));
  };

  const handleClose = () => {
    // Close modal or navigate back
    console.log('Close quiz question editor');
  };

  const handleDone = () => {
    // Save the quiz question
    console.log('Quiz question saved:', {
      question,
      options,
      questionType,
      timeToAppear
    });
  };

  return (
    <div className="quiz-question-container">
      <div className="quiz-header">
        <h1 className='gen-quiz'>Time to Generate Quiz</h1>
        <button className="close-button" onClick={handleClose}>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 3C35.7 3 45 12.3 45 24C45 35.7 35.7 45 24 45C12.3 45 3 35.7 3 24C3 12.3 12.3 3 24 3ZM15.9 34.5L24 26.4L32.1 34.5L34.5 32.1L26.4 24L34.5 15.9L32.1 13.5L24 21.6L15.9 13.5L13.5 15.9L21.6 24L13.5 32.1L15.9 34.5Z" fill="#D72638"/>
            </svg></span>
        </button>
      </div>

      <div className="quiz-content">
        <div className="video-preview">
          <div className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M12.2331 25.5753C11.9381 25.5753 11.6553 25.4581 11.4468 25.2496C11.2382 25.041 11.1211 24.7582 11.1211 24.4633V11.1197C11.1212 10.9302 11.1697 10.7439 11.262 10.5784C11.3544 10.413 11.4874 10.2739 11.6486 10.1743C11.8098 10.0747 11.9938 10.018 12.183 10.0094C12.3723 10.0009 12.5606 10.0409 12.7301 10.1256L26.0737 16.7974C26.2582 16.8898 26.4133 17.0318 26.5217 17.2073C26.6301 17.3829 26.6875 17.5852 26.6875 17.7915C26.6875 17.9978 26.6301 18.2001 26.5217 18.3756C26.4133 18.5512 26.2582 18.6931 26.0737 18.7856L12.7301 25.4574C12.5758 25.5347 12.4056 25.5751 12.2331 25.5753ZM13.345 12.9188V22.6641L23.0903 17.7915L13.345 12.9188Z" fill="#9F9595"/>
              <path d="M17.7934 4.44757C20.4325 4.44757 23.0124 5.23016 25.2067 6.69638C27.4011 8.16259 29.1113 10.2466 30.1213 12.6848C31.1312 15.123 31.3955 17.806 30.8806 20.3944C30.3658 22.9828 29.0949 25.3604 27.2288 27.2266C25.3626 29.0927 22.985 30.3636 20.3966 30.8784C17.8082 31.3933 15.1252 31.129 12.687 30.1191C10.2488 29.1091 8.1648 27.3989 6.69858 25.2045C5.23236 23.0102 4.44977 20.4303 4.44977 17.7912C4.44977 14.2522 5.85562 10.8582 8.35803 8.35583C10.8604 5.85341 14.2544 4.44757 17.7934 4.44757ZM17.7934 2.22363C14.7144 2.22363 11.7046 3.13665 9.14452 4.84724C6.58445 6.55782 4.58912 8.98915 3.41085 11.8337C2.23258 14.6783 1.92429 17.8085 2.52496 20.8283C3.12564 23.8481 4.60831 26.622 6.78547 28.7991C8.96263 30.9763 11.7365 32.4589 14.7563 33.0596C17.7761 33.6603 20.9062 33.352 23.7508 32.1737C26.5954 30.9955 29.0268 29.0001 30.7373 26.4401C32.4479 23.88 33.361 20.8702 33.361 17.7912C33.361 13.6624 31.7208 9.70275 28.8013 6.78326C25.8818 3.86378 21.9222 2.22363 17.7934 2.22363Z" fill="#9F9595"/>
            </svg>
          </div>
        </div>

        <div className="question-form">
          <span className='input-label-quiz'>
          <div className="input-group2 question-input">
           
            <input 
              id="input-quiz"
              type="text" 
              placeholder="Enter Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div className="form-controls">
            <div className="dropdown-group">
              <label id="type-quiz">Question Type:</label>
              <div className="select-wrapper">
                <select 
                className='select-que'
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option>Multiple Choice</option>
                  <option>True/False</option>
                  <option>Free Response</option>
                </select>
              </div>
            </div>
            
            <div className="time-group">
              <label id="set-time">Set Time</label>
              <div className="select-wrapper">
                <input
                className='set_time' 
                  type="text" 
                  placeholder="Minute to appear"
                  value={timeToAppear}
                  onChange={(e) => setTimeToAppear(e.target.value)}
                />
              </div>
            </div>
          </div>
          </span>
          <div className="options-list">
            {options.map((option, index) => (
              <div className="option-item" key={option.id}>
                <input type="radio" name="quizOption" id={`option-${option.id}`} />
                <input 
                  id="option-quiz"
                  type="text" 
                  placeholder={`Option ${index + 1}`}
                  value={option.text}
                  onChange={(e) => {
                    const updatedOptions = [...options];
                    updatedOptions[index].text = e.target.value;
                    setOptions(updatedOptions);
                  }}
                />
                <button 
                  className="remove-option" 
                  onClick={() => removeOption(option.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M8.75 26.25C8.0625 26.25 7.47417 26.0054 6.985 25.5163C6.49583 25.0271 6.25083 24.4383 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V23.75C23.75 24.4375 23.5054 25.0263 23.0163 25.5163C22.5271 26.0063 21.9383 26.2508 21.25 26.25H8.75ZM21.25 7.5H8.75V23.75H21.25V7.5ZM11.25 21.25H13.75V10H11.25V21.25ZM16.25 21.25H18.75V10H16.25V21.25Z" fill="#CDB4DB"/>
                  </svg>
                </button>
              </div>
            ))}
            
            <div className="add-option">
              <input 
                type="radio" 
                disabled 
                style={{ visibility: 'hidden' }}
              />
              <input 
                type="text" 
                placeholder="Add an option" 
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addOption();
                  }
                }}
              />
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-button" onClick={addOption}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 5C20.5138 5 25 9.48625 25 15C25 20.5138 20.5138 25 15 25C9.48625 25 5 20.5138 5 15C5 9.48625 9.48625 5 15 5ZM15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5ZM21.25 13.75H16.25V8.75H13.75V13.75H8.75V16.25H13.75V21.25H16.25V16.25H21.25V13.75Z" fill="#CDB4DB"/>
              </svg>
            </button>
            <button className="remove-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.75 26.25C8.0625 26.25 7.47417 26.0054 6.985 25.5163C6.49583 25.0271 6.25083 24.4383 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V23.75C23.75 24.4375 23.5054 25.0263 23.0163 25.5163C22.5271 26.0063 21.9383 26.2508 21.25 26.25H8.75ZM21.25 7.5H8.75V23.75H21.25V7.5ZM11.25 21.25H13.75V10H11.25V21.25ZM16.25 21.25H18.75V10H16.25V21.25Z" fill="#CDB4DB"/>
              </svg>

            </button>
          </div>
        </div>
      </div>

      <div className="quiz-footer">
        <button className="done-button" onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export {QuizQuestionPage};