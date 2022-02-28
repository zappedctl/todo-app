import { useDispatch } from 'react-redux';
import { x } from '@xstyled/styled-components';

import SolidIcon from '../SolidIcon/SolidIcon';

import { TodoType } from '../../types/todoTypes';
import todoActions from '../../redux/actions/todoActions';

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
      bg="boxColor"
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
        <SolidIcon iconName="check" size={18} />
        <x.div
          onClick={() => dispatch({
            type: todoActions.REMOVE_TODO,
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
