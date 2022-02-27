import { ComponentMeta, ComponentStory } from '@storybook/react';

import SolidIcon from './SolidIcon';

export default {
  title: 'SolidIcon',
  component: SolidIcon,
} as ComponentMeta<typeof SolidIcon>;

export const Regular: ComponentStory<typeof SolidIcon> = () => <SolidIcon iconName="check" />;
