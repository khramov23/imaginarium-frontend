import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import themeStore from '@/store/theme.store'

import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherInterface {
	className?: string
	big?: boolean
}

const ThemeSwitcher: FC<ThemeSwitcherInterface> = ({ className, big = false }) => {
	const switchThemeHandler = () => {
		themeStore.toggleTheme()
	}

	return (
		<div className={cls(styles.switcher, className, { [styles.big]: big })} onClick={switchThemeHandler}>
			<MaterialIcon name={themeStore.theme === 'light' ? 'MdLightMode' : 'MdDarkMode'} />
		</div>
	)
}

export default observer(ThemeSwitcher)
