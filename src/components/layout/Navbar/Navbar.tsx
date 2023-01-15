import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'

import Menu from '@/components/layout/Navbar/Menu/Menu'
import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import Avatar from '@/components/ui/Avatar/Avatar'
import Button from '@/components/ui/Button/Button'
import Logo from '@/components/ui/Logo/Logo'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher'

import { getMenuItems } from '@/utils/getMenuItems'

import authStore from '@/store/auth.store'

import styles from './Navbar.module.scss'
import { RoutePaths } from '@/router/router.types'

let items: MenuItem[] = []
autorun(() => {
	items = getMenuItems()
})

interface NavbarInterface {
	style?: CSSProperties
}

const Navbar: FC<NavbarInterface> = ({ style }) => {
	const logoutHandler = () => {
		authStore.logout()
	}

	return (
		<div className={styles.navbar} style={style}>
			<div style={{ width: 200 }}>
				<Logo />
			</div>
			<Menu items={items} />
			<div className="flex gap-10">
				<ThemeSwitcher />
				{authStore.isAuth ? (
					<>
						<Avatar user={authStore.user} />
						<Button text="Logout" onClick={logoutHandler} />
					</>
				) : (
					<Link to={RoutePaths.LOGIN}>
						<Button text="Login" />
					</Link>
				)}
			</div>
		</div>
	)
}

export default observer(Navbar)
