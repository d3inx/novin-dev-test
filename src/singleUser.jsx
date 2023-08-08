import { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Btn from "./components/btn";

const SingleUser = () => {
  const [user, setUser] = useState();

  //fetch our user detail from api
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((Data) => Data.json())
      .then((Response) => setUser(Response.data));
  }, []);


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
      <Btn route='/' text='Home' />
    </div>
  );
};

export default SingleUser;
