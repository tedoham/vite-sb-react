import { Navbar } from './Navbar'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'

export default {
    title: 'Components/UI Elements/Navbar',
    component: Navbar,
    // argTypes: {
    //     size: {control: 'text'}
    // }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Empty_Navbar = Template.bind({});
// Navbar.args = {
//     // color: "primary",
//     // text: "Button...",
//     // label: "primary button",
//     // buttonSize: "medium",
//     // disabled: false
// };
