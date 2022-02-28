import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { x } from '@xstyled/styled-components';

import SolidIcon from '../SolidIcon/SolidIcon';

import { ActionType } from '../../redux/action-types/todoActionTypes';
import { TodoType } from '../../types/todoTypes';

type TodoProps = {
  todo: TodoType;
};

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const [isRemoved, setIsRemoved] = useState(false);
  const dispatch = useDispatch();

  const removeTodo = () => {
    setIsRemoved(true);

    setTimeout(() => {
      dispatch({
        type: ActionType.REMOVE_TODO,
        payload: todo.id,
      });
    }, 200);
  }

  return (
    <x.div
      display="flex"
      alignItems="center"
      p={6}
      bg={todo.done ? 'lightPrimary' : 'boxColor'}
      opacity={isRemoved ? 0 : 1}
      transition="allFast"
    >
      <x.div
        mr="auto"
      >
        {todo.text}
      </x.div>
      <x.div
        display="flex"
        gap={6}
      >
        <x.div
          color={todo.done ? 'primary' : 'inherit'}
          onClick={() => dispatch({
            type: ActionType.TOGGLE_TODO_DONE,
            payload: todo.id,
          })}
        >
          <SolidIcon iconName="check" size={18} />
        </x.div>
        <x.div
          onClick={() => removeTodo()}
        >
          <SolidIcon iconName="times" size={18} />
        </x.div>
      </x.div>
    </x.div>
  );
}

export default Todo;
