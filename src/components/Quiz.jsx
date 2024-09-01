import React, { useState, useRef, } from 'react'
import '../css/Quizapp.css'
import Button from '@mui/material/Button';
import { questions } from '../questions/Questions';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Quiz() {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(questions[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    const [showStartQuiz, setShowStartQuiz] = useState(false);
    const handleClick = () => {
        setShowStartQuiz(true);
        navigate('/startquiz');
    }

    const navigate = useNavigate();
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let OptionArray = [Option1, Option2, Option3, Option4];
    const checkAnswer = (e, answer) => {
        if (lock === false) {
            if (question.ans === answer) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                OptionArray[question.ans - 1].current.classList.add("correct");
            }
        }

    }
    const next = () => {
        if (lock === true) {
            if (index === questions.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(questions[index]);
            setLock(false);
            OptionArray.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }
    const reset = () => {
        setIndex(0);
        setQuestion(questions[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className='bodyforquiz' >

            <div className='container'>
                <h1>Quiz App</h1>
                <hr />
                {result ? <></> : <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => { checkAnswer(e, 1) }}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAnswer(e, 2) }}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAnswer(e, 3) }}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAnswer(e, 4) }}>{question.option4}</li>
                    </ul>
                    <Button onClick={next} sx={{ width: '250px', height: '50px', marginLeft: '205px', borderRadius: '8px' }} variant="contained" color='error' size='medium'>Next</Button>
                    <div className='index'>{index + 1} of {questions.length} questions</div>
                </>}
                {result ? <>
                    <h2 style={{ textAlign: 'center' }}>You Scored {score} out of {questions.length}</h2>
                    <Button onClick={reset} sx={{ width: '250px', height: '50px', marginLeft: '210px', borderRadius: '8px' }} variant="contained" color='error' size='medium'>Reset</Button></> : <></>}
            </div>
            <div>
                {showStartQuiz && <Navbar />}
                <button className='exit-button' onClick={handleClick}>Exit</button>
            </div>

        </div>
    )
}

export default Quiz