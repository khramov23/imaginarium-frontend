import React, { FC } from 'react'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import MenuItemComponent from '@/components/layout/Navbar/Menu/MenuItem/MenuItemComponent'

import styles from '../Navbar.module.scss'

interface MenuProps {
	items: MenuItem[]
}

const Menu: FC<MenuProps> = ({ items }) => {
	return (
		<nav>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItemComponent item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
