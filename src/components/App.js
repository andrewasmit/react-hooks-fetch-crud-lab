import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(res=>res.json())
  .then(data=>setQuestions(data))
}, [])


function handleFormSubmit(newQuestion){
  setQuestions([...questions, newQuestion])
}


function handleDeleteQuestion(deletedQuestion){
  console.log("in App.js: ", deletedQuestion);
  const newQuestions = questions.filter(question=>question.id !==deletedQuestion)
  setQuestions(newQuestions);
}

function handleChangeCorrectAnswer(updatedQuestion){
  console.log("in app: ", updatedQuestion)
  const updatedQuestions = questions.map(q=>{
    if (q.id===updatedQuestion.id){
        return updatedQuestion
    } else{
      return q;
    }
  })
  setQuestions(updatedQuestions);
}



  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion={handleFormSubmit}/> : <QuestionList onDeleteClick={handleDeleteQuestion} onAnswerChange={handleChangeCorrectAnswer} questions={questions}/>}
    </main>
  );
}

export default App;
