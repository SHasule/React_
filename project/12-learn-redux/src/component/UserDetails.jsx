import React from "react";

import { fakeUserData } from "../Api/chance";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import UserName from "./UserName";
import DeleteALLUsers from "./DeleteALLUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  return (
    <div>
      <div>
        <div> List of user Details </div>
        <button onClick={() => addNewUser(fakeUserData())}>Add new user</button>
      </div>

      <UserName />

      <hr />

      <DeleteALLUsers />
    </div>
  );
};

export default UserDetails;

