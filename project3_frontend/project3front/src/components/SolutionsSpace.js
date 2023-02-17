import React, {useState, useEffect} from "react"
import UserLayout from "./userLayout"

function SolutionsSpace({currentUser}) {
  const [myData, setMyData] = useState([])
  console.log(myData)
  useEffect(() => {
    fetch(`http://localhost:9292/users/${currentUser.id}/solutions`)
    .then(res => res.json())
    .then(data => setMyData(data))
  },[])

  let displayInformation = myData.map(data => 
    <UserLayout difficulty={data.problem.difficulty}likes={data.num_of_likes} language={data.language} question={data.problem.question} solution={data.solve}/>
  )


  return(
    <div className="mx-auto w-4/6 mt-20">
      {displayInformation}
    </div>
  )
}

export default SolutionsSpace
