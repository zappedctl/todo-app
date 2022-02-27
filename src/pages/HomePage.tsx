import { useSelector } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';

import { RootState } from '../redux/rootReducer';

const HomePage = (): JSX.Element => {
  const { todoData } = useSelector((state: RootState) => state.todos);

  return (
    <>
      <TodoList todos={todoData} />
    </>
  );
}

export default HomePage;
