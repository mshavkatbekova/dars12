import React, { useRef } from "react";

import useSignup from "../hooks/useSignup";

function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const password = useRef();
  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );
    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="forms max-container flex flex-col h-screen justify-center items-center">
      <h2 className="text-2xl md:text-4xl">Signup</h2>
      <form className="flex flex-col mb-5" onSubmit={handleSubmit}>
        <label className="mb-3">
          <span className="block mb-1">Name:</span>
          <input
            className="px-3 py-2  rounded-md"
            ref={displayName}
            type="text"
          />
        </label>
        <label className="mb-3">
          <span className="block mb-1">Email:</span>
          <input className="px-3 py-2  rounded-md" ref={email} type="email" />
        </label>
        <label className="mb-3">
          <span className="block mb-1">Password:</span>
          <input
            className="px-3 py-2 rounded-md"
            ref={password}
            type="password"
          />
        </label>
        <button className="btn btn-sm md:btn-md btn-secondary">Login</button>
      </form>
      <p>
        If you don't have account, please{" "}
        <a className="text-primary underline" href="signup">
          Signup
        </a>
      </p>
    </div>
  );
}

export default Signup;
