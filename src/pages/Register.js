//import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const[inpval,setInpval] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [data,setData] = useState([]);
  console.log(inpval);
  
const getdata = (e) =>{
//console.log(e.target.value)

const{value,name} = e.target;
//console.log(value,name)

setInpval(() => {
  return{
    ...inpval,
    [name]:value
  }
})
}

 const addData = (e) => {
  e.preventDefault();

  const { name, email, password } = inpval;

  if(name ===""){
     alert("name feild is required")
    }else if(email === ""){
      alert("email feild is required")
  }else if(password === ""){
    alert("password feild is required")
}else{
 alert("Registered Successfully!")
 }
 localStorage.setItem("userRegister",JSON.stringify([...data,inpval]));
}
  return (
    <div className='login-wrapper  register-page'>
      <div className='col-md-12 pt-3'>
         <form className='onSubmit={this.onSubmit}' autoComplete='off'>
         <div className="heading text-center">
                        <h1 className=" mt-3 text-danger" style={{ fontFamily: "Anton", letterSpacing: "1px" }}>Register Now</h1>
                        
                    </div>
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <div className="input-group flex-nowrap pe-3">
                    <input type="text" className="form-control" w-50 onChange={getdata} name='name' placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping" />
                  </div>
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <div className="input-group flex-nowrap pe-3">
                    <input type="email" className="form-control" onChange={getdata} name='email' placeholder="Enter Your Email" aria-label="Email" aria-describedby="addon-wrapping"  />
                  </div>
                  <div className="mb-3  pe-3">
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <div className="input-group flex-nowrap">
                      <input type="password" className="form-control" onChange={getdata} name='password' placeholder="Enter Your Password" aria-label="Password" aria-describedby="addon-wrapping"  />
                    </div>
                  </div>

                  <button type="submit" className="btn mt-3 mb-2 ms-3 btn-success" onClick={addData} >Click here to register</button>
                  <Link to="/login" className="btn mt-3 mb-2 ms-5 btn-success">Login</Link>
                </form>
              </div>
              </div>
    
  )
}

export default Register