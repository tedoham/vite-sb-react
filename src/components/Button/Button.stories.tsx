import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
title: 'Components/UI Elements/Button',
component: Button,
// argTypes: {
//     disabled: { control: 'disabled'},
// },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    text: "Button...",
    label: "primary button",
    buttonSize: "medium",
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    text: "Button...",
    label: "secondary button",
    buttonSize: "small",
    disabled: false
}

export const tertiary = Template.bind({});
tertiary.args = {
    color: 'primary',
    text: "Button...",
    label: "Tertiary button",
    buttonSize: "large",
    disabled: false
}

export const disabled = Template.bind({});
disabled.args = {
    color: 'disabled',
    text: "Button...",
    label: "disabled button",
    buttonSize: "medium",
    disabled: true
}
