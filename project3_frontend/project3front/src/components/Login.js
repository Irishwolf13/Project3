import React from "react"

function Login(){



  return (
    <form>
           {/* <label htmlFor="login" value="Username">Username:   </label><br/> */}
           <input type="text" placeholder="enter username..." name="login"  autoFocus={true}/>
           {/* <label htmlFor="login" value="Password">Password:   </label><br/> */}
           <input type="password" placeholder="enter password..."name="password" autoFocus={true}/>
           <button type="submit" >login</button>
    </form>
  )
}

export default Login
