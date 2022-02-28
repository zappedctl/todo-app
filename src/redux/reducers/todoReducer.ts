import { ActionType } from '../action-types/todoActionTypes';
import { Action } from '../actions/todoActions';
import { TodoType } from '../../types/todoTypes';

interface InitialStateDefaultObject {
  todoData: TodoType[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  todoData: [],
};

const todoReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        todoData: [
          ...state.todoData,
          action.payload as TodoType,
        ],
      };

    case ActionType.REMOVE_TODO:
      return {
        ...state,
        todoData: state.todoData.filter(
          todo =>
          todo.id !== action.payload as string,
        ),
      };

    case ActionType.TOGGLE_TODO_DONE:
      return {
        ...state,
        todoData: state.todoData.map(
          todo =>
          todo.id === action.payload as string
            ? {
              ...todo,
              done: !todo.done,
            } : todo
        ),
      };

    default:
      return state;
  }
}

export default todoReducer;
