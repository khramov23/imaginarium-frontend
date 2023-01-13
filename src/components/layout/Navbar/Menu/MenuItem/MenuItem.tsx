import React, { FC } from 'react'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'


interface MenuItemProps {
    item: MenuItem
}

const MenuItemComponent: FC<MenuItemProps> = ({ item }) => {

    return (
        <li>
            <a href=""></a>
        </li>
    );
};

export default MenuItemComponent;