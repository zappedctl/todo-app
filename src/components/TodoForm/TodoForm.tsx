import { useState, ChangeEvent } from 'react';
import { x } from '@xstyled/styled-components';

import SolidIcon from '../SolidIcon/SolidIcon';

const TodoForm = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  }

  const handleSubmit = () => {
    alert('Sent');
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
