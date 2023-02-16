function UserLayout({difficulty, language, question, solution, likes}) {

  return (
    <div className="mx-auto bg-slate-300 w-5/6 h-96 border-2 border-solid border-black">
      {/* <h1 className="font-win95">main space</h1> */}
      <div className="problem-card">
      <h4 className="question"><strong>Difficulty: {difficulty}</strong></h4>
      <p> <strong>Language of Solve: </strong>{language}</p>
      <h4 className="question">QUESTIONS: {question}</h4>
      <h4 className="question">SOLUTIONS: {solution}</h4>
      <h4 className="question">Number of Likes: {likes}</h4>
      </div>
    </div>
  )
}

export default UserLayout
