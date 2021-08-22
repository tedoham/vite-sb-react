import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './Input';

export default {
    title: 'Components/UI Elements/Input',
    component: Input,
    // argTypes: {
    //     size: {control: 'text'}
    // }
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({})
Default.args = {
    mandatory: false,
    label: 'Username',
    // placeHolder: 'Username'
}

export const Mandatory = Template.bind({})
Mandatory.args = {
    mandatory: true,
    label: 'Username',
    // placeHolder: 'Username'    
}