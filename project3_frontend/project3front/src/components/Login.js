import React, { useState, useEffect } from "react"

function Login({helperLoggingIn, hideLogInWindow}){
  const [userName, setUserName] = useState("")
  const [userPass, setUserPass] = useState("")
  const [myUsers, setMyUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then(allUsers => {
      setMyUsers(allUsers)
  })
  }, [])

  const handleLoginClicked = (e) => {
    e.preventDefault();
    // Check to see if User name and Password match
    let currentUser = myUsers.find(user => user.user_name == userName)
    if (currentUser) {
      if (currentUser.password == userPass){
        helperLoggingIn(currentUser)
        hideLogInWindow()
      }else{
        alert('Wrong Password')
      }
    }else {
      alert('No user with that Username')
    }
  }

  const handleInputName = (e) => {
    setUserName(e.target.value)
  }
  const handleInputPass = (e) => {
    setUserPass(e.target.value)
  }
  return (
    <form onSubmit={handleLoginClicked}>
      <div className="border-solid border-t-black border-l-black border-b-white border-r-white border-2 max-w-max bg-gray-200 mx-1 p-1 h-28">
        {/* <label htmlFor="login" value="Username">Username:   </label><br/> */}
        <div className="border-2 border-solid border-gray-500 max-w-max bg-white m-1 pl-1">
          <input onChange={handleInputName} type="text" placeholder="Enter Username..." name="login"  autoFocus={true}/>
        </div>

        {/* <label htmlFor="login" value="Password">Password:   </label><br/> */}
        <div className="border-2 border-solid border-gray-500 max-w-max bg-white m-1 pl-1">
          <input onChange={handleInputPass} type="password" placeholder="Enter Password..."name="password" autoFocus={true}/>          
        </div>

        <button type="submit" className="comment-button right-12">Log In</button>
      </div>
    </form>
  )
}

export default Login
