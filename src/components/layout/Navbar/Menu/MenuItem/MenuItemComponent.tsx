import cls from 'classnames'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'

import styles from './MenuItemComponent.module.scss'

interface MenuItemProps {
	item: MenuItem
}

const MenuItemComponent: FC<MenuItemProps> = ({ item }) => {
	const activeClass = cls(styles.navlink, styles.active)

	return (
		<li className={styles.li}>
			<NavLink to={item.link} className={({ isActive }) => (isActive ? activeClass : styles.navlink)}>
				{item.value}
			</NavLink>
		</li>
	)
}

export default MenuItemComponent
