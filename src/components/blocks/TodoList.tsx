import Todo from '../elements/Todo';

import { TodoType } from '../../types/todoTypes';

type TodoListProps = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map(
        todo =>
        <Todo key={todo.id} todo={todo} />
      )}
    </div>
  );
}

export default TodoList;
