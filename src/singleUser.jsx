import { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((Data) => Data.json())
      .then((Response) => setUser(Response.data));
  }, []);
  console.log(user);
  return (
    <div className="container">
      <div className="w-52 h-52">
        <LazyLoadImage
          className="w-full h-full shadow-md rounded-xl object-fill"
          width="200px"
          height="200px"
          src={user?.avatar}
          alt=""
        />
      </div>
      <div>
        <ul className="flex flex-col items-start text-2xl ml-3">
          <li className="my-2">{`Full Name: ${user?.first_name} ${user?.last_name}`}</li>
          <li className="my-2">Email: {user?.email}</li>
        </ul>
      </div>
      <Link
            to={"/"}
            className="w-32 h-12 flex items-center justify-center text-xl bg-slate-50 text-slate-900 rounded-xl cursor-pointer"
          >
            Home
          </Link>
    </div>
  );
};

export default SingleUser;
