//import React, { Component } from 'react'
//import React from 'react'
import { Link } from 'react-router-dom' 
import React, {useState} from 'react';


const login =() => {
    const[inpval,setInpval] = useState({
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
      const getUserArr = localStorage.getItem("userRegister");
      console.log(getUserArr);
    
      const { email, password } = inpval;
    
      if(email === ""){
          alert("email feild is required")
      }else if(password === ""){
        alert("password feild is required")
    }else{
         if(getUserArr && getUserArr.length){
             const userdata = JSON.parse(getUserArr);
            const userlogin=userdata.filter((el,k)=>{
                 return el.email === email && el.password === password
            });
            if(userlogin.length === 0){
                alert("invalid details")
            }else{
                alert("user login successfully")
             console.log("user login successfully");
            // localStorage.setItem("userRegister",JSON.stringify([...data,inpval]));

            }
        }
        }
    }

    return (
      
            <div className="wrapper w-50 login-wrapper">

                <div className="container card ">
                    <div className="heading mt-4 text-center">
                        <h1 className=" mt-6 text-danger" style={{ fontFamily: "Anton", letterSpacing: "1px" }}>Login</h1>
                        
                    </div>
                    <div className="login-container container my-3 row">
                        <div className="col-md-12 pt-3">
                            
                            <form className="my-1"  autoComplete="off">
                                <div className="form-group">
                                    <input  type="email" required placeholder="Email" onChange={getdata} name='email' className=" mt-3 mx-10 form-control"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" required name='password' onChange={getdata} placeholder="Password" className=" mt-4 mx-10 form-control"  />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary mt-5 mx-3" onClick={addData}>Login </button>
                                    <Link to="/" className="btn btn-danger mt-5 mx-3">Continue</Link>
                                    <Link to="/register" className="btn btn-secondary login-back mt-5 mx-3">Back</Link>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default login