import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/actions/todoActions";

const Todos = () => {
  const todos = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todoItems" key={todo.id}>
          <h2>{todo.todo}</h2>
          <div onClick={() => handleDelete(todo.id)}>🗑️</div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
