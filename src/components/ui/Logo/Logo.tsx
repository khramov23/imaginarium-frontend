import { observer } from 'mobx-react-lite'

import logoDark from '@/assets/logo-dark.png'
import logoLight from '@/assets/logo-light.png'

import themeStore from '@/store/theme.store'

const Logo = () => {
	return (
		<div className="logo">
			<a href="/">
				<img
					src={themeStore.theme === 'light' ? logoLight : logoDark}
					alt="imaginarium"
				/>
			</a>
			<button
				className="px-5 py-3 bg-primary hover:bg-red-dark dark:bg-white transition-colors"
				onClick={() => themeStore.toggleTheme()}
			>
				Change theme
			</button>
		</div>
	)
}

export default observer(Logo)
