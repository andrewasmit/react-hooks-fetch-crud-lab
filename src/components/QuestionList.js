import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteClick, onAnswerChange }) {

const questionsToRender = questions.map((q, index)=>{
  return <QuestionItem key={index} onAnswerChange={onAnswerChange} onDeleteClick={onDeleteClick} question ={q} />
})



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsToRender}
      </ul>
    </section>
  );
}

export default QuestionList;
