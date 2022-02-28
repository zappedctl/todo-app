import { TodoType } from '../../types/todoTypes';
import todoActions from '../actions/todoActions';

interface InitialStateDefaultObject {
  todoData: TodoType[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  todoData: [],
};

const todoReducer = (state = INITIAL_STATE, action: { type: string, payload: TodoType | string }) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return {
        ...state,
        todoData: [
          ...state.todoData,
          action.payload as TodoType,
        ],
      };

    case todoActions.REMOVE_TODO:
      return {
        ...state,
        todoData: state.todoData.filter(
          todo =>
          todo.id !== action.payload as string,
        ),
      };

    case todoActions.TOGGLE_TODO_ACTIVE:
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
