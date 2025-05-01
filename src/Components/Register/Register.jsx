import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/Firebase.int";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name,email,password);

    //create user 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.massage);
    })
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-10 mt-10">
      <h1 className="text-3xl font-bold mx-auto mt-4">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Press it</button>
        </form>
        <p className="text-gray-500">
          New to this site? Please{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;