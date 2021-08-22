import React from 'react'

interface MenuProps {
    menuData: [{
        menuTitle: string,
        href?: string,
    }]
}

function Menu({
    menuData
}: MenuProps) {
    return (
        <div className="absolute lg:mt-[52px] mt-[25px] lg:right-0 -right-4 lg:-ms-96 -ms-80
        bg-secondaryColor1 border-b border-[#3f8bbf] lg:w-[440px] w-[360px] h-screen lg:h-auto drop-shadow-menuDropShadow">
            {menuData.map(menu => (
                <div className="hover:bg-secondaryColor2 border-b border-[#3f8bbf] h-20 lg:w-[440px] w-[360px]
    flex items-start justify-start">
                    <a
                        href={menu.href}
                        className="font-robotoFont text-white px-6 py-[26px] text-xl">
                        <div className="flex justify-between">{menu.menuTitle}</div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Menu
