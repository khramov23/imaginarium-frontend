import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import logoDark from '@/assets/logo-dark.png'
import logoLight from '@/assets/logo-light.png'

import themeStore from '@/store/theme.store'

interface LogoProps {
	className?: string
	switchMode?: boolean
}

const Logo: FC<LogoProps> = ({ className, switchMode }) => {

	const currentTheme = switchMode ? !themeStore.theme: themeStore.theme

	return (
		<div className={`w-12 ${className}`}>
			<a href="/" className='block'>
				<img
					className='w-full'
					src={currentTheme === 'light' ? logoLight : logoDark}
					alt="imaginarium"
				/>
			</a>
		</div>
	)
}

export default observer(Logo)
