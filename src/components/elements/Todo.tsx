import { TodoType } from '../../types/todoTypes';

type TodoProps = {
  todo: TodoType;
};

const Todo = ({ todo }: TodoProps): JSX.Element =>
  (
    <div>
      {todo.text}
    </div>
  );

export default Todo;
