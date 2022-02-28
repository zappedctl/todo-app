import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoWrap from './TodoWrap';
import { Regular as RegularTodoList } from '../TodoList/TodoList.stories';

export default {
  title: 'TodoWrap',
  component: TodoWrap,
} as ComponentMeta<typeof TodoWrap>;

export const Regular: ComponentStory<typeof TodoWrap> = () => (
  <TodoWrap>
    <RegularTodoList
      todos={[
        { id: '0', text: 'Todo 1', done: false },
        { id: '1', text: 'Todo 2', done: false },
        { id: '2', text: 'Todo 3', done: false },
        { id: '3', text: 'Todo 4', done: false },
        { id: '4', text: 'Todo 5', done: false },
      ]}
    />
  </TodoWrap>
);
