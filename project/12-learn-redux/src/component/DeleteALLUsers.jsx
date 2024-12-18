import React from "react";
import { useDispatch } from "react-redux";
// import { removeAllUser } from '../store/slice/UserSlice'
import { removeAllUser } from "../store/action";

const DeleteALLUsers = () => {
  const dispatch = useDispatch();

  function clearAll() {
    dispatch(removeAllUser());
  }

  return (
    <div>
      <button onClick={clearAll}>Clear all Users</button>
    </div>
  );
};

export default DeleteALLUsers;
