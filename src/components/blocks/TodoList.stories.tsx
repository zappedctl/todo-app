import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoList from './TodoList';

export default {
  title: 'TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

export const Regular: ComponentStory<typeof TodoList> = () => (
    <TodoList todos={[
      { id: 0, text: 'Todo 1' },
      { id: 1, text: 'Todo 2' },
      { id: 2, text: 'Todo 3' },
      { id: 3, text: 'Todo 4' },
      { id: 4, text: 'Todo 5' },
    ]} />
);
