import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RecoilRoot,
} from "recoil"; //add recoil to save login information

import "./index.css";

import ErrorPage from "./error-page";
import App from "./App";
import Login from "./login";
import SingleUser from "./singleUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "singleUSer",
    element: <SingleUser />,
    errorElement: <ErrorPage />,
  },
]); // react router dom for urls

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
