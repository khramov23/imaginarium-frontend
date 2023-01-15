import { observer } from 'mobx-react-lite'
import React, { FC, ReactNode } from 'react'

import Layout from '@/components/layout/Layout'

import logoDark from '@/assets/logo-dark.png'
import logoLight from '@/assets/logo-light.png'

import themeStore from '@/store/theme.store'

import styles from './LoginLayout.module.scss'

interface LoginLayoutProps {
	children?: ReactNode
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
	const logo = themeStore.theme === 'light' ? logoLight : logoDark

	return (
		<Layout
			center
			className={styles.content}
			style={{ backgroundImage: `url(${logo})` }}
		>
			{children}
		</Layout>
	)
}

export default observer(LoginLayout)
