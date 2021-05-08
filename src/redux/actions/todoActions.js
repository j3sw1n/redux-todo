import { TodoConstants } from "../constans/todoConstants";

export const addTodo = (todo) => {
  return {
    type: TodoConstants.ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: TodoConstants.DELETE_TODO,
    payload: todoId,
  };
};
