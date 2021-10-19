import "./FormContinerLogin.css";
import { useState } from "react";


const FormContinerLogin = () => {

    
const [inputEmail,setInputEmail] = useState("") ; 
const [inputPassword,setInputPassword] = useState("");
const [validationPassword,setValidationPass] = useState("");
const [validationEmail,setValidationEmail] = useState("");

const inputEmailHandler = (event)=>{
    setInputEmail(event.target.value);
    vaildationEmaillHandler(event.target.value);
};

const inputPasswordHandelr = (event)=>{
    setInputPassword(event.target.value);
    vaildationPassHandler(event.target.value);
    
}


const vaildationPassHandler = (inputPassword)=>{
    setValidationPass(inputPassword);
}
const vaildationEmaillHandler = (inputEmail)=>{
    setValidationEmail(inputEmail);
}
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

 const vaildPassword= validationPassword.length<3 && 'Length must be more than 2'
 const vaildEmail=! regex.test(validationEmail) && 'This non a Vail email form'



  return (
    <div className="bigest-conitner">
      <form class="form-continer w-50 ">
        <div className=" ">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={inputEmail}
              onChange={inputEmailHandler}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
              <small id="emailHelp" class="form-text text-danger"> {vaildEmail}</small>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={inputPassword}
              onChange={inputPasswordHandelr}
            />
            <small id="emailHelp" class="form-text text-danger"> {vaildPassword}</small>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
             
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContinerLogin;
