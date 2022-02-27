import { x } from '@xstyled/styled-components';

import { TodoType } from '../../types/todoTypes';

type TodoProps = {
  todo: TodoType;
};

const Todo = ({ todo }: TodoProps): JSX.Element =>
  (
    <x.div
      p={6}
      bg="boxColor"
    >
      {todo.text}
    </x.div>
  );

export default Todo;
