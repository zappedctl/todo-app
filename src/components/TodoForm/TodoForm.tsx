import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { x } from '@xstyled/styled-components';

import SolidIcon from '../SolidIcon/SolidIcon';

import todoActions from '../../redux/actions/todoActions';

const TodoForm = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') handleSubmit();
  }

  const handleSubmit = () => {
    todoText && dispatch({
      type: todoActions.ADD_TODO,
      payload: {
        id: uuidv4(),
        text: todoText,
      },
    });

    setTodoText('');
  }

  return (
    <x.div
      display="flex"
      mt="auto"
      w="100%"
    >
      <x.input
        type="text"
        w="100%"
        p={4}
        outline="none"
        border="none"
        value={todoText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
      />
      <x.div
        display="flex"
        alignItems="center"
        px={8}
        h="100%"
        bg="primary"
        color="boxColor"
        cursor="pointer"
        onClick={() => handleSubmit()}
      >
        <SolidIcon iconName="paper-plane" size={18} />
      </x.div>
    </x.div>
  );
}

export default TodoForm;
