import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoForm from './TodoForm';

export default {
  title: 'TodoForm',
  component: TodoForm,
} as ComponentMeta<typeof TodoForm>;

export const Regular: ComponentStory<typeof TodoForm> = () => <TodoForm />;
