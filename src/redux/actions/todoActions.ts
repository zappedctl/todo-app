import { ActionType } from '../action-types/todoActionTypes';
import { TodoType } from '../../types/todoTypes';

export interface AddAction {
  type: ActionType.ADD_TODO, 
  payload: TodoType;
}

export interface RemoveAction {
  type: ActionType.REMOVE_TODO;
  payload: string;
}

export interface DoneAction {
  type: ActionType.TOGGLE_TODO_DONE;
  payload: string;
}

export type Action = AddAction | RemoveAction | DoneAction;
