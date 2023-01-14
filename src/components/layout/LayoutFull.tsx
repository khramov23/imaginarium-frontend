import React, { FC, ReactNode } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

import backgroundDark from '@/assets/logo-dark.png'
import backgroundLight from '@/assets/logo-light.png'

import styles from './Layout.module.scss'
import themeStore from "@/store/theme.store";
import {observer} from "mobx-react-lite";

interface LayoutFullProps {
	children: ReactNode
}

const LayoutFull: FC<LayoutFullProps> = ({ children }) => {

	const bg = themeStore.theme === "light" ? backgroundLight : backgroundDark

	return (
		<div className={styles.outer}>
			<Navbar />
			<div
				className={styles.content}
				style={{
					background: `url(${bg})`,
				}}
			>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default observer(LayoutFull)
