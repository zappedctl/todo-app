import { TodoType } from '../../types/todoTypes';

interface InitialStateDefaultObject {
  todoData: TodoType[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  todoData: [],
};

const todoReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default todoReducer;
