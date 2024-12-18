import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";
const UserName = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.user;
  });

  const RemoveUser = (id) => {
    dispatch(removeUser(id));
    console.log(id);
  };

  return (
    <div>
      <ul>
        {data.map((name, id) => {
          return (
            <li key={id}>
              {name}
              <button onClick={() => RemoveUser(id)}>
                
                <RiDeleteBinLine />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserName;
