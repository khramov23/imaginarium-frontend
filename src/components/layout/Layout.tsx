import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

import styles from './Layout.module.scss'

interface LayoutProps extends Pick<DivType, 'className' | 'children' | 'style'> {
	center?: boolean
}

const Layout: FC<LayoutProps> = ({ center, children, className, style }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<div className={cls(styles.content, center && styles.center, className)} style={style}>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout
