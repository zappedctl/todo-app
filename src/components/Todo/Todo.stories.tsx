import { ComponentMeta, ComponentStory } from '@storybook/react';

import Todo from './Todo';

export default {
  title: 'Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

export const Regular: ComponentStory<typeof Todo> = () => (
  <Todo
    todo={{
      id: '0',
      text: 'Sit similique dignissimos quisquam assumenda',
      done: false,
    }}
  />
); 
