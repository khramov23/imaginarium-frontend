import React, { FC } from 'react'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import MenuItemComponent from '@/components/layout/Navbar/Menu/MenuItem/MenuItemComponent'

interface MenuProps {
	items: MenuItem[]
}

const Menu: FC<MenuProps> = ({ items }) => {
	return (
		<nav>
			<ul className="list-none flex items-center gap-8 px-10">
				{items.map((item) => (
					<MenuItemComponent item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
