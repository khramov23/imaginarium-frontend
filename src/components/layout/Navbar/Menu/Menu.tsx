import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import MenuItemComponent from '@/components/layout/Navbar/Menu/MenuItem/MenuItemComponent'

import styles from '../Navbar.module.scss'

interface MenuProps extends DivType {
	items: MenuItem[]
	onMenuItemChoose?: () => void
}

const Menu: FC<MenuProps> = ({ items, onMenuItemChoose }) => {
	return (
		<nav>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItemComponent onMenuItemChoose={onMenuItemChoose} item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
