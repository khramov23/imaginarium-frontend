import React from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './GalleryLoader.module.scss'

const GalleryLoader = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: 500 }} />
				<Skeleton className={styles.image} style={{ height: 500 }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: 400 }} />
				<Skeleton className={styles.image} style={{ height: 600 }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: 600 }} />
				<Skeleton className={styles.image} style={{ height: 400 }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: 450 }} />
				<Skeleton className={styles.image} style={{ height: 550 }} />
			</div>
		</div>
	)
}

export default GalleryLoader
