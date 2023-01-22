import React from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './TrendingLoader.module.scss'

const TrendingLoader = () => {
	return (
		<div className={styles.images}>
			<Skeleton className={styles.img} />
			<Skeleton className={styles.img} />
			<Skeleton className={styles.img} />
			<Skeleton className={styles.img} />
		</div>
	)
}

export default TrendingLoader
