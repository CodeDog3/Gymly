/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { POST } from "@/app/api/register/route";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const changeHandler = (
    variant: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (variant === "email") {
      setEmail(e.target.value);
    }
    if (variant === "password") {
      setPassword(e.target.value);
    }
    if (variant === "name") {
      setName(e.target.value);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !password) {
      setError("All fields are required");
      return;
    }
    setError("");

    try {
      await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="  rounded-lg shadow-lg border-t-4 border-teal-400 p-5">
        <h1 className="text-xl font-bold my-4"> Register Here</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-y-3"
        >
          <input
            value={name}
            onChange={(e) => changeHandler("name", e)}
            className="w-[400px] border border-gray-200 py-2 px-6"
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
            onChange={(e) => changeHandler("email", e)}
            className="w-[400px] border border-gray-200 py-2 px-6"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => changeHandler("password", e)}
            className="w-[400px] border border-gray-200 py-2 px-6"
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 cursor-pointer text-white font-bold py-1">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white font-bold w-fit text-sm rounded-md py-1 px-2">
              {error}
            </div>
          )}
          <Link className="text-sm text-gray-700" href={"/login"}>
            Already have an account?{" "}
            <span className="underline">Register.</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
