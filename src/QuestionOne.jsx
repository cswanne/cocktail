import React from 'react';
import './QuestionOne.css';
import { Link } from 'react-router-dom';

const QuestionOne = () => {
  return (
    <div>QuestionOne
      <Link to="/main-menu"><button className='backButton'>X</button></Link>
    </div>
    
  )
}

export default QuestionOne