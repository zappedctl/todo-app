import { useDispatch } from 'react-redux';
import { x } from '@xstyled/styled-components';

import SolidIcon from '../SolidIcon/SolidIcon';

import { ActionType } from '../../redux/action-types/todoActionTypes';
import { TodoType } from '../../types/todoTypes';

type TodoProps = {
  todo: TodoType;
};

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <x.div
      display="flex"
      alignItems="center"
      p={6}
      bg={todo.done ? 'lightPrimary' : 'boxColor'}
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
          onClick={() => dispatch({
            type: ActionType.REMOVE_TODO,
            payload: todo.id,
          })}
        >
          <SolidIcon iconName="times" size={18} />
        </x.div>
      </x.div>
    </x.div>
  );
}

export default Todo;
