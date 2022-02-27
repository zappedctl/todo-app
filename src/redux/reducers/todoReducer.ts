import { TodoType } from '../../types/todoTypes';

interface InitialStateDefaultObject {
  todoData: TodoType[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  todoData: [
    { id: 0, text: 'Todo 1' },
    { id: 1, text: 'Todo 2' },
    { id: 2, text: 'Todo 3' },
    { id: 3, text: 'Todo 4' },
    { id: 4, text: 'Todo 5' },
  ],
};

const todoReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default todoReducer;
