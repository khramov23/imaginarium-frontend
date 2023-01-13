import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import logoDark from '@/assets/logo-dark.png'
import logoLight from '@/assets/logo-light.png'

import themeStore from '@/store/theme.store'


interface LogoProps {
	className?: string
	switchMode?: boolean
}

const Logo: FC<LogoProps> = ({ className, switchMode = false }) => {
	const currentTheme = switchMode ? !themeStore.theme : themeStore.theme

	return (
		<div className={`w-16 ${className}`}>
			<Link to={'/'} className="block">
				<img
					className="w-full"
					src={currentTheme === 'light' ? logoLight : logoDark}
					alt="imaginarium"
				/>
			</Link>
		</div>
	)
}

export default observer(Logo)