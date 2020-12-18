import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button,{ ButtonProps } from './button';
import ArrowIcon from '../../icons/arrow.svg';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children : 'Default Button',
  type: 'default'
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger Button',
  type: 'danger',
};


export const SuccessButton = Template.bind({});
SuccessButton.args = {
  children: 'Success Button',
  type: 'success',
};


export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

