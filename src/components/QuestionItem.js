import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteHandler(){
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(()=>onDeleteClick(question.id));
  }


  function answerChangeHandler(e){
    const newCorrectIndex = e.target.value
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        correctIndex: newCorrectIndex
      }),
    })
    .then(res=>res.json())
    .then(data=>onAnswerChange(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={answerChangeHandler}>{options}</select>
      </label>
      <button onClick={deleteHandler}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
