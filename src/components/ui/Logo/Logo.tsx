import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { RoutePaths } from '@/router/router.types'

import logoDark from '@/assets/logo-dark.png'
import logoLight from '@/assets/logo-light.png'

import themeStore from '@/store/theme.store'

import styles from './Logo.module.scss'

interface LogoProps {
	className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<div className={styles.logo}>
			<Link to={RoutePaths.MAIN} className={cls(styles.link, className)}>
				<img src={themeStore.theme === 'light' ? logoLight : logoDark} alt="imaginarium" />
			</Link>
		</div>
	)
}

export default observer(Logo)
