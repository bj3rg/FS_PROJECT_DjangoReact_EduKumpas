import React from "react";
import imgTest from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full md:w-3/5 flex flex-col xl:flex-row items-center  justify-center gap-10 bg-white p-8 rounded-lg">
        <div className="flex flex-col w-80">
          <NavLink to="/home">
            <img src={imgTest} alt="" />
          </NavLink>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            debitis rerum saepe cupiditate, voluptatem distinctio aliquam
            inventore adipisci quam quod eius maiores ab voluptas, numquam
            suscipit alias dolores dolor modi.{" "}
            <NavLink to="/home">
              <span className="underline text-sm">
                Click here to visit page
              </span>
            </NavLink>
          </h1>
        </div>
        <div className="flex items-center w-[100%]  lg:w-[60%]  flex-col rounded-md p-2 gap-2">
          <form action="" className="flex flex-col items-end border gap-2 p-8">
            <div className="flex items-center gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email:"
                className="form-control border-2 border rounded-md w-60 p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password:"
                className="form-control border-2 border w-60 p-2 rounded-md"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded "
                formAction=""
              >
                Create
              </button>
            </div>
          </form>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-xs">Don't have an account?</p>
            <NavLink to="/sign-up">
              <button className="underline flex-end text-xs">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
