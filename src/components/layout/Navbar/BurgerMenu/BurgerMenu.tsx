import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Menu from '@/components/layout/Navbar/Menu/Menu'
import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import Button from '@/components/ui/Button/Button'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'

import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
	items: MenuItem[]
	onBurgerToggle: () => void
	onBurgerClose: () => void
	isBurgerActive: boolean
}

const BurgerMenu: FC<BurgerMenuProps> = (props) => {
	const { onBurgerToggle, onBurgerClose, isBurgerActive, items } = props
	const navigate = useNavigate()

	const mobileItems = [...items, { link: `${RoutePaths.USERS}/${authStore.user._id}`, value: 'Profile' }]

	const logoutHandler = () => {
		authStore.logout()
		navigate(RoutePaths.GALLERY)
	}

	return (
		<Sidebar
			onToggle={onBurgerToggle}
			onClose={onBurgerClose}
			isOpen={isBurgerActive}
			mode="right"
			widthArrow={false}
		>
			<div className={styles.burgerMenu}>
				<Menu items={mobileItems} onMenuItemChoose={onBurgerClose} />
				<div className={styles.bottom}>
					<ThemeSwitcher big />
					<Button className={styles.button} onClick={logoutHandler}>
						Logout
					</Button>
				</div>
			</div>
		</Sidebar>
	)
}

export default observer(BurgerMenu)
