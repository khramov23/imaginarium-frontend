import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button/Button'

import { RoutePaths } from '@/router/router.types'

import styles from './MainScreen.module.scss'

const MainScreen = () => {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<h1 className={styles.title}>Imaginarium</h1>
				<h2 className={styles.subtitle}>Find and download the best photos, designs, and mockups</h2>
				<Link to={RoutePaths.GALLERY}>
					<Button className="mx-auto">Search Images</Button>
				</Link>
			</div>
		</div>
	)
}

export default MainScreen
