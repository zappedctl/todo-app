import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoList from './TodoList';

export default {
  title: 'TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

export const Regular: ComponentStory<typeof TodoList> = () => (
    <TodoList todos={[
      { id: 0, text: 'Todo 1', done: false },
      { id: 1, text: 'Todo 2', done: false },
      { id: 2, text: 'Todo 3', done: false },
      { id: 3, text: 'Todo 4', done: false },
      { id: 4, text: 'Todo 5', done: false },
    ]} />
);
