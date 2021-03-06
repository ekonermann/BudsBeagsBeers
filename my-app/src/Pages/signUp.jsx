import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { auth } from "./forums";
//import { generateUserDocument } from "./forums";

const SignUp = () => {
/*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, {displayName});
      }
      catch(error){
        setError('Error Signing up with email and password');
      }

      setEmail("");
      setPassword("");
      setDisplayName("");
    };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  }; */
  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form className="">
          <label htmlFor="displayName" className="block" style = {{marginLeft: "40%"}}>
            Username:
          </label>
          <input
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            //value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            //onChange={event => onChangeHandler(event)}
          /><br></br>
          <label htmlFor="userEmail" className="block" style = {{marginLeft: "40%"}}>
            Email:&emsp;&emsp;
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            //value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            //onChange={event => onChangeHandler(event)}
          /><br></br>
          <label htmlFor="userPassword" className="block" style = {{marginLeft: "40%"}}>
            Password:&nbsp;&nbsp;
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            //value={password}
            placeholder="Your Password"
            id="userPassword"
            //onChange={event => onChangeHandler(event)}
          /><br></br>
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-black"
            onClick={event => {
              //createUserWithEmailAndPasswordHandler(event, email, password);
            }}
            style = {{marginLeft: "40%"}}
          >
            Sign up
          </button>
        </form>

        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/signIn" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
