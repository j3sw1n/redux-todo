import { TodoConstants } from "../constans/todoConstants";

const initialState = [];

export const todoReducer = (state = initialState, { type, payload }) => {
  let newTodos;
  switch (type) {
    case TodoConstants.ADD_TODO:
      newTodos = [...state];
      newTodos.push(payload);
      return newTodos;
    case TodoConstants.DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== payload);
      return newTodos;
    default:
      return state;
  }
};
