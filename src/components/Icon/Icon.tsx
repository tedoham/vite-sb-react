import classNames from 'classnames';
import React from 'react';

interface IconProps {
    iconName: string,
    size?: 'small'|'medium'|'large',
    color?: 'primary'|'secondary'|'tertiary'|'disabled',
}

const iconClasses = (color: string) => 
    classNames({ 
        'bg-primaryColor1 hover:bg-primaryColor2': !color || color === 'primary',
        'bg-secondaryColor1 hover:bg-secondaryColor2': color === 'secondary',
        'bg-tertiaryColor1 hover:bg-tertiaryColor2': color === 'tertiary',
        'bg-baseColor6 hover:bg-baseColor4': color === 'disabled',
        'cursor-pointer': true
    }); 

const iconSizes = (size: string) => 
    classNames({
        'w-28 h-8': !size || size === 'small',
        'w-32 h-10': size === 'medium',
        'w-36 h-12': size === 'large',
    });

export const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
    const { iconName = 'Icon', 
            size = 'small', 
            color = 'primary', 
    } = props;

    return (
        <div className={[iconClasses(color), iconSizes(size)].join(' ')}></div>
    )
}