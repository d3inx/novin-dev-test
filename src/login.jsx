import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";

import { tokenState } from "../atoms/tokenState";

const FORM_ENDPOINT = "https://reqres.in/api/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useRecoilState(tokenState);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const finalFormEndpoint = e.target.action;

    const data = {
      email,
      password,
    };

    e.preventDefault();
    setEmail("");
    setPassword("");

    fetch(finalFormEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((Data) => Data.json())
      .then((Response) => {
        setToken(Response.token);

        return navigate("/");
      });
  };
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="mb-4">
            <label
              className="flex justify-between text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email: <span>eve.holt@reqres.in</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="flex justify-between text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password: <span>cityslicka</span>
            </label>
            <input
              className="shadow appearance-none border bg-slate-50 border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
