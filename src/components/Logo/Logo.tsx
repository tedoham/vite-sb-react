import React from 'react'

interface LogoProps {
    className?: string,
    src?: string,
    alt?: string,
    href?: string,
}

function Logo({
    className = `lg:h-[86px] h-8 w-auto`,
    src = "E2E_LOGO.png",
    alt = "E2E Group Logo",
    href = "/"
}:LogoProps) {
    return (
    <div className="">
        <a href={href} >
            <img className={className} src={src} alt={alt} />
        </a>
    </div>
    )
}

export default Logo
