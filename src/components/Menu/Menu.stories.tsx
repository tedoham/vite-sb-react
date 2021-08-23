import { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from "./Menu";
import React from 'react'

export default {
    title: 'Components/UI Elements/Menu',
    component: Menu,
    } as ComponentMeta<typeof Menu>;
    
    
    const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
    
    export const MenuAvatar = Template.bind({});
    MenuAvatar.args = {
        menuData: [
            {menuTitle: "Menu one", href: "#"},
            {menuTitle: "Menu two", href: "#"},
            {menuTitle: "Menu three", href: "#"},
            {menuTitle: "Menu four", href: "#"},
        ]
    };