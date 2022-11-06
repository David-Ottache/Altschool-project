import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Authentication.css'


export const Authentication = () => {
     const [user, setUser] = useState("");
     const [pass, setPassword] = useState("");
     
    const navigate = useNavigate();
     const handleValidate = (e) => {
       e.preventDefault();
       if (user === "admin@mail.com" && pass === "admin") {
           alert("Successful Login.", "Welcome to ReactJs!", "success");
          
           navigate('/')
       } else {
           alert("Wrong Credentials", "Please Try Again!!", "error");
           navigate('/login')
       }
       

     };
  return (
    <div className='AuthPage'>
      <h1>Authentication Portal</h1>
      <div>
        <div>
          <img width="400" alt="" />
        </div>
        <div >
          <form className ="form-element" onSubmit={handleValidate}>
            <div>
              {/* <label>Email address</label> */}
              <input
                type="email"
                value={user}
                placeholder="Enter Email"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type="password"
                value={pass}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='btn-type'type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;