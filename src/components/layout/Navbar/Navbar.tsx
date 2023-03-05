import cls from 'classnames'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Menu from '@/components/layout/Navbar/Menu/Menu'
import { MenuItem } from '@/components/layout/Navbar/Menu/Menu.types'
import Avatar from '@/components/ui/Avatar/Avatar'
import Button from '@/components/ui/Button/Button'
import Logo from '@/components/ui/Logo/Logo'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher'

import { useMatchMedia } from '@/hooks/useMatchMedia'

import { RoutePaths } from '@/router/router.types'

import { getMenuItems } from '@/utils/getMenuItems'

import authStore from '@/store/auth.store'
import filterStore from '@/store/filter.store'

import styles from './Navbar.module.scss'

let items: MenuItem[] = []
autorun(() => {
	items = getMenuItems()
})

interface NavbarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Navbar: FC<NavbarInterface> = ({ className, ...rest }) => {
	const { lg, xl, xxl, xs } = useMatchMedia()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const isSearchInputShown = useMemo(() => xl || xxl || lg, [xl, xxl, lg])

	const logoutHandler = () => {
		authStore.logout()
		navigate(RoutePaths.GALLERY)
	}

	const formHandler = (e: any) => {
		e.preventDefault()
		filterStore.setParam('title')
		navigate('/gallery')
	}

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		filterStore.setQuery(e.target.value)
	}

	return (
		<div className={cls(styles.navbar, className)} {...rest}>
			<Logo className={styles.logo} />
			{pathname === '/' && isSearchInputShown && (
				<form onSubmit={formHandler} className={styles.searchForm}>
					<SearchInput
						className={styles.input}
						value={filterStore.query}
						onChange={searchHandler}
					/>
				</form>
			)}
			{!xs && <Menu items={items} />}
			<div className={styles.rightPart}>
				<ThemeSwitcher />
				{authStore.isAuth ? (
					<>
						<Link to={`${RoutePaths.USERS}/${authStore.user._id}`}>
							<Avatar user={authStore.user} />
						</Link>
						<Button onClick={logoutHandler}>Logout</Button>
					</>
				) : (
					<Link to={RoutePaths.LOGIN}>
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default observer(Navbar)
