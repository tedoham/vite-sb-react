import classNames from 'classnames';
import React from 'react';
import './Input.css';

// const logoClasses = (size: string) =>
//   classNames({
//     'w-96 bg-red-500': !size || size === 'xl',
//     'w-48 bg-red-500': size === 'lg',
//     'w-16 bg-red-500': size === 'md',
//     'w-12 bg-red-500': size === 'sm'
//   })

  interface InputProps {
    /**
     * is mandatory 
     */
    mandatory?: boolean;
    /**
     * How large should the input be?
     */
    // size?: 'small' | 'medium' | 'large';
    // size?: string;
    /**
     * Input contents
     */
    label: string;
    /**
     * Input placeholder
     */
    // placeHolder: string;
}

function Input({
  mandatory = false,
  // size = 'medium',
  label = 'label',
  // placeHolder = 'placeholder'
}: InputProps) {
    return (
      <div className="relative focus-within:border-baseColor4 mb-4 lg:mb-3 text-left">
        <input
          type="text"
          id={label}
          name={label}
          placeholder=" "
          className="text-baseColor6 px-3 input block w-full appearance-none focus:outline-none bg-transparent"
        />
        <label
          htmlFor={label}
          className="text-baseColor6 absolute flex text-left px-3 top-3 -z-1 duration-300 text-base origin-top-start">
          {label}
          {mandatory === true ?<span className="required pl-1 text-warningColor">*</span> : ''}
        </label>
      </div>
    )
}

export default Input
