import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, Props } from '../src/components/Switch/Switch';

const meta: Meta = {
    title: 'Form/Switch',
    component: Switch,
    args: {
        children: 'This is a switch component',
    },
};

export default meta;

/**
 * Template Switch
 *
 * @param args storybook arguments
 * @return template switch
 */
const Template: Story<Props> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'This is the secondary switch style',
    variant: 'secondary',
};
