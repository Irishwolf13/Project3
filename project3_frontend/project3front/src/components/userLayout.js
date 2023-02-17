function UserLayout({difficulty, language, question, solution, likes}) {

  return (
    <div className="mx-auto w-5/6 mt-2">
      <div className="window-outer">
        <div className="window-inner-no-bar">
          <h4 className="whitespace-pre-wrap break-words font-win95bold">Difficulty: <p className="inline-block font-win95">{difficulty}</p></h4>
          <p className="font-win95bold">Language of Solve: <p className="inline-block font-win95">{language}</p></p>
          <h4 className="whitespace-pre-wrap break-words font-win95bold">QUESTIONS: <p className="inline-block font-win95">{question}</p></h4>
          <h4 className="whitespace-pre-wrap break-words font-win95bold">SOLUTIONS: <p className="inline-block font-win95">{solution}</p></h4>
          <h4 className="whitespace-pre-wrap break-words font-win95bold">Number of Likes: <p className="inline-block font-win95">{likes}</p></h4>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
