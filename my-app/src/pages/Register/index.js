import { TiSocialFacebook } from "react-icons/ti";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLock } from "react-icons/md";

import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
const Login = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <main className=" flex items-center justify-center h-screen w-full text-center">
      <div className=" bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
        {!signUp ? (
          <div className=" w-3/5 p-5">
            <div className=" text-left font-bold">
              <span className=" text-green-500">Company</span>Name
            </div>
            <div className=" py-10">
              <h2 className=" text-3xl font-bold text-green-500">
                Sign in to Account
              </h2>
              <div className=" border-2 w-10 border-green-500 inline-block "></div>
              <div className=" flex justify-center my-2">
                <a className=" border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer">
                  <TiSocialFacebook className=" text-sm" />
                </a>
                <a className=" border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer">
                  <FaGoogle className=" text-sm" />
                </a>
                <a className=" border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer">
                  <FaLinkedin className=" text-sm" />
                </a>
              </div>
              <p className=" text-gray-400">or use you email account</p>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                  };
                  fetch("http://localhost:3002/register", requestOptions);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className=" flex flex-col items-center mb-2">
                      <div className=" bg-gray-200 w-60 p-3 flex items-center">
                        <FaRegUser className=" text-gray-400 m-2" />
                        <Field
                          name="username"
                          placeholder="Username"
                          className=" bg-gray-200  outline-none flex-1 text-sm"
                        />
                        {errors.username && touched.username ? (
                          <div>{errors.username}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className=" flex flex-col items-center mb-2">
                      <div className=" bg-gray-200 w-60 p-3 flex items-center">
                        <FaRegEnvelope className=" text-gray-400 m-2" />
                        <Field
                          name="email"
                          placeholder="Email"
                          className=" bg-gray-200  outline-none flex-1 text-sm"
                        />
                        {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className=" flex flex-col items-center">
                      <div className=" bg-gray-200 w-60 p-3 flex items-center">
                        <MdLock className=" text-gray-400 m-2" />
                        <Field
                          name="password"
                          placeholder="Password"
                          type="password"
                          className=" bg-gray-200  outline-none flex-1"
                        />
                        {errors.email && touched.email ? (
                          <div>{errors.password}</div>
                        ) : null}
                      </div>

                      <div className=" flex justify-between w-64 mb-5">
                        <label className=" flex items-center text-xs">
                          <input
                            type="checkbox"
                            name="Remember"
                            className=" ml-2 mr-1"
                          />{" "}
                          Remember Me
                        </label>
                        <a className="text-sm">Forget Password?</a>
                      </div>
                      <Link
                        type="submit"
                        className=" border-2 rounded-3xl py-2 px-12 inline-block font-semibold hover:bg-green-500 hover:text-white hover:cursor-pointer"
                        href={"/"}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        ) : (
          <RegisterPopUp />
        )}

        {/*Trigger to Sign Up */}
        <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className=" text-3xl font-bold mb-3">Hello, Friend !</h2>
          <div className=" border-2 w-10 border-white inline-block "></div>
          <p className=" mb-10">
            Fill up the personal information and start jurney with us
          </p>

          <a
            className=" border-2 rounded-3xl py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-500 hover:cursor-pointer"
            onClick={() => setSignUp(true)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
