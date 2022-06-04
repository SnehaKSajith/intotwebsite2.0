import React, {useState} from "react";
import axios from "axios";
export default function Signup() {
  const [input, setInput] = useState({
    name: '',
    email:'',
    password:'',
    re_password:''
  })
  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
    const newSign ={
      name: input.name,
      email: input.email,
      password: input.password,
      re_password: input.re_password
    }
    axios.post("http://localhost:3001/create", newSign)
  }
  return (
    <React.Fragment>
      <section className="sec-sign">
        <form action="signup.html" style={{ border: "1px solid #ccc" }}>
          <div className="signform">
            <div className="container">
              <h2>Sign Up!!!</h2>
              <hr/><hr/>
              <label for="name">Enter Your Name</label>
              <input onChange={handleChange} type="text" name="name" value={input.name} required />
              <label for="email">Enter Your Email</label>
              <input onChange={handleChange} type="email" name="email" value={input.email} required/>
              <label for="password">Enter Password</label>
              <input onChange={handleChange} type="password" name="password" value={input.password} required/>
              <label for="re-password">Re-enter password</label>
              <input onChange={handleChange} type="password" name="re_password" value={input.re_password} required/>
              <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button onClick={handleClick} type="submit" className="signupbtn">Signup</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}
