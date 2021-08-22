import classNames from 'classnames';
import React, { SyntheticEvent } from 'react';
import { Icon } from '../Icon/Icon';

interface ButtonProps {
    color: 'primary'|'secondary'|'tertiary'|'disabled',
    text: string,
    label: string,
    buttonSize?: 'small'|'medium'|'large',

    hasIcon?: boolean,
    iconName?: string,
    iconSize?: 'small'|'medium'|'large',
    iconColor?: 'primary'|'secondary'|'tertiary'|'disabled',

    disabled?: boolean,
    pressed?: boolean,
    tabIndex?: number,
    
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}  

const buttonClasses = (color: string) => 
    classNames({ 
        'bg-primaryColor1 hover:bg-primaryColor2': !color || color === 'primary',
        'bg-secondaryColor1 hover:bg-secondaryColor2': color === 'secondary',
        'bg-tertiaryColor1 hover:bg-tertiaryColor2': color === 'tertiary',
        'bg-baseColor6 hover:bg-baseColor4': color === 'disabled',
        'cursor-pointer text-white text-base rounded border border-white focus:border-double focus:border-4 focus:border-white': true
    }); 

const buttonSizes = (size: string) => 
    classNames({
        'w-28 h-8': !size || size === 'small',
        'w-32 h-10': size === 'medium',
        'w-36 h-12': size === 'large',
    });


export const Button = ({
    color = 'primary',   
    text = "Button",
    label = "Button",
    buttonSize = 'medium',
    hasIcon = false,
    iconName = "Icon",
    iconSize = "small",
    iconColor = "primary",
    disabled = false,
    pressed = false,
    tabIndex = 0,
    onClick, 
    onKeydown,
    ...props
}: ButtonProps) => {
    return (
        <button 
        className={[buttonClasses(color), buttonSizes(buttonSize)].join(' ')}  
        disabled={disabled ? disabled : false} 
        aria-pressed={pressed}
        aria-label={label}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={onKeydown}
        {...props} 
        >
            {/* {
                hasIcon && (
                    <Icon 
                    iconName={iconName} 
                    size={iconSize}
                    color={color} />
                )
            } */}
            {text}
        </button>
    );
};
