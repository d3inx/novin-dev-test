import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { tokenState } from "../atoms/tokenState";

import "./App.css";

const finalFormEndpoint = "https://reqres.in/api/users?page=2";

function App() {
  const [token, setToken] = useRecoilState(tokenState);
  const [users, setUsers] = useState();
  useEffect(() => {
    if (token) {
      fetch(finalFormEndpoint)
        .then((Data) => Data.json())
        .then((Response) => {
          setUsers(Response.data)
        });
    }
  }, []);

  return (
    <div className="w-100">
      <h1>Reactjs Test</h1>

      {token ? (
        <>
        
        </>
      ) : (
        <div className="flex justify-center mt-20 space-x-4">
          <Link
            to={"login"}
            className="w-1/5 h-20 flex items-center justify-center text-3xl bg-slate-50 text-slate-900 rounded-xl cursor-pointer"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
