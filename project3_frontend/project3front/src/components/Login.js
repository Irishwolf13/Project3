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
           {/* <label htmlFor="login" value="Username">Username:   </label><br/> */}
           <input onChange={handleInputName} type="text" placeholder="enter username..." name="login"  autoFocus={true}/>
           {/* <label htmlFor="login" value="Password">Password:   </label><br/> */}
           <input onChange={handleInputPass} type="password" placeholder="enter password..."name="password" autoFocus={true}/>
           <button type="submit" >login</button>
    </form>
  )
}

export default Login
