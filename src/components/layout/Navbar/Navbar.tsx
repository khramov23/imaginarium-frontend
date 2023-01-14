import { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'

import Menu from '@/components/layout/Navbar/Menu/Menu'
import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import Button from '@/components/ui/Button/Button'
import Logo from '@/components/ui/Logo/Logo'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher'

import styles from './Navbar.module.scss'
import { RoutePaths } from '@/router/router.types'

const items: MenuItem[] = [
	{ link: RoutePaths.GALLERY, value: 'Gallery' },
	{ link: RoutePaths.USERS, value: 'Users' },
	{ link: RoutePaths.FEED, value: 'Feed' },
]

interface NavbarInterface {
	style?: CSSProperties
}

const Navbar: FC<NavbarInterface> = ({ style }) => {
	return (
		<div className={styles.navbar} style={style}>
			<div style={{width: 200}}>
				<Logo />
			</div>
			<Menu items={items} />
			<div className="flex gap-10" style={{width: 200}}>
				<ThemeSwitcher />
				<Link to={RoutePaths.LOGIN}>
					<Button text="Login" />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
