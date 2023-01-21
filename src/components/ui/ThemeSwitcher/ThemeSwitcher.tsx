import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import themeStore from '@/store/theme.store'

import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherInterface {
	className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherInterface> = ({ className }) => {
	const switchThemeHandler = () => {
		themeStore.toggleTheme()
	}

	return (
		<div
			className={styles.switcher + ` ${className}`}
			onClick={switchThemeHandler}
		>
			<MaterialIcon
				name={
					themeStore.theme === 'light' ? 'MdLightMode' : 'MdDarkMode'
				}
			/>
		</div>
	)
}

export default observer(ThemeSwitcher)
