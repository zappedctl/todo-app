import { TodoType } from '../../types/todoTypes';
import todoActions from '../actions/todoActions';

interface InitialStateDefaultObject {
  todoData: TodoType[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  todoData: [],
};

const todoReducer = (state = INITIAL_STATE, action: { type: string, payload: TodoType }) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return {
        ...state,
        todoData: [
          ...state.todoData,
          action.payload
        ],
      };

    default:
      return state;
  }
}

export default todoReducer;
