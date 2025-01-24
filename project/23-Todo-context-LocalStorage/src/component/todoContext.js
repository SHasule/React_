
 import {createContext, useContext } from "react";

 export const TodoContext=createContext({
  todos:[{
    id:1,
    todo:"todo msg",
    complated:false
  }],
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplate:(id)=>{}

 })


 export const TodoProvider=TodoContext.Provider

 export const UseTodo=()=>{
  return useContext(TodoContext)
}