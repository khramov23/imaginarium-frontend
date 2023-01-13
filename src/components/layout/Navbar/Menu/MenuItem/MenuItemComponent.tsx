import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'

interface MenuItemProps {
	item: MenuItem
}

const MenuItemComponent: FC<MenuItemProps> = ({ item }) => {
	return (
		<li>
			<NavLink
				to={item.link}
				className="px-1 py-1 border-b-2 border-transparent hover:border-primary transition-colors text-xl"
			>
				{item.value}
			</NavLink>
		</li>
	)
}

export default MenuItemComponent
