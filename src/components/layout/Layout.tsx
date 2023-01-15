import React, { FC, ReactNode } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

import styles from './Layout.module.scss'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<div className={styles.layoutContent}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
