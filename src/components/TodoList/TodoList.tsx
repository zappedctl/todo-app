import { x } from '@xstyled/styled-components';

import Todo from '../Todo/Todo';

import { TodoType } from '../../types/todoTypes';

type TodoListProps = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      width="100%"
    >
      {todos.map(
        todo =>
        <Todo key={todo.id} todo={todo} />
      )}
    </x.div>
  );
}

export default TodoList;
