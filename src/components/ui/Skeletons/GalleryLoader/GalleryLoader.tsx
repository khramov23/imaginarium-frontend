import React from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './GalleryLoader.module.scss'

const GalleryLoader = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: '31.5rem' }} />
				<Skeleton className={styles.image} style={{ height: '31.5rem' }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: '25rem' }} />
				<Skeleton className={styles.image} style={{ height: '37.5rem' }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: '37.5rem' }} />
				<Skeleton className={styles.image} style={{ height: '25rem' }} />
			</div>
			<div className={styles.col}>
				<Skeleton className={styles.image} style={{ height: '28.125rem' }} />
				<Skeleton className={styles.image} style={{ height: '34.375rem' }} />
			</div>
		</div>
	)
}

export default GalleryLoader
