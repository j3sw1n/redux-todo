import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducer);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), todo: input }));
    console.log(todos);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
