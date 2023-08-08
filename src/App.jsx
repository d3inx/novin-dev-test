import { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component"; // for optimize images

import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";

import { tokenState } from "../atoms/tokenState";

import "./App.css";
import Btn from "./components/btn";

const finalFormEndpoint = "https://reqres.in/api/users?page=2";

function App() {
  const [token, setToken] = useRecoilState(tokenState);
  const [users, setUsers] = useState();
  useEffect(() => {
    if (token) {
      fetch(finalFormEndpoint)
        .then((Data) => Data.json())
        .then((Response) => {
          setUsers(Response.data);
        });
    }
  }, []);

  const handleLogout = () => {
    setToken("");
  };

  return (
    <div className="container mx-auto">
      <h1>Reactjs Test</h1>

      {token ? (
        <>
          <div
            className="w-32 h-12 flex items-center justify-center text-xl bg-slate-50 text-slate-900 rounded-xl cursor-pointer"
            onClick={handleLogout}
          >
            Log Out
          </div>
          <div className="flex flex-row flex-wrap">
            {users?.map((user) => (
              <div key={user?.id} className="w-full md:w-1/3 lg:w-1/3 px-5">
                <Link
                  to={"singleUser"}
                  className="flex flex-row my-5 bg-slate-50 rounded-3xl overflow-hidden"
                >
                  <div className="w-1/3 h-40">
                    <LazyLoadImage
                      className="w-full h-full shadow-md object-cover"
                      width="150px"
                      height="150px"
                      src={user?.avatar}
                      alt=""
                    />
                  </div>
                  <div className="w-2/3 flex flex-col text-slate-800 font-bold">
                    <ul className="flex flex-col items-start ml-3">
                      <li className="my-2">{`Full Name: ${user?.first_name} ${user?.last_name}`}</li>
                      <li className="my-2">Email: {user?.email}</li>
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-20 space-x-4">
          <Btn route='login' text='Login' />
        </div>
      )}
    </div>
  );
}

export default App;
