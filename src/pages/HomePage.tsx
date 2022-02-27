import { useSelector } from 'react-redux';

import TodoWrap from '../components/TodoWrap/TodoWrap';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';

import { RootState } from '../redux/rootReducer';

const HomePage = (): JSX.Element => {
  const { todoData } = useSelector((state: RootState) => state.todos);

  return (
    <>
      <TodoWrap>
        <TodoList todos={todoData} />
        <TodoForm />
      </TodoWrap>
    </>
  );
}

export default HomePage;
