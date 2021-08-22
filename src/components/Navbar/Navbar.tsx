import React from 'react'

interface NavbarProps {
    className?: string,
}

export const Navbar = ({
    className = `grid lg:grid-cols-12 grid-cols-4 gap-4 
    bg-white lg:h-[104px] h-[50px] px-4 shadow-navbarShadow flex justify-center items-center`,
    ...props
}: NavbarProps) => {

    return (
        <nav className={className} {...props}>
            {/* {Children} */}
        </nav>
    );
};
