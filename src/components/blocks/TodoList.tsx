import { useSelector } from 'react-redux';

import Todo from '../elements/Todo';

import { RootState } from '../../redux/rootReducer';

const TodoList = () => {
  const { todoData } = useSelector((state: RootState) => state.todos);

  return (
    <div>
      {todoData.map(
        todo =>
        <Todo key={todo.id} todo={todo} />
      )}
    </div>
  );
}

export default TodoList;
