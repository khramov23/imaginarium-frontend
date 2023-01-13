import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button/Button'

import styles from './MainScreen.module.scss'
import { RoutePaths } from '@/router/router.types'

const MainScreen = () => {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<h1 className={styles.title}>Imaginarium</h1>
				<h2 className={styles.subtitle}>
					Find and download the best photos, designs, and mockups
				</h2>
				<Link to={RoutePaths.GALLERY}>
					<Button
						text="Search Images"
						className="border-red-main text-red-main"
					/>
				</Link>
			</div>
		</div>
	)
}

export default MainScreen