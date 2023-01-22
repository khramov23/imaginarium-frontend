import React from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './UserBlockLoader.module.scss'

const UserBlockLoader = () => {
	return (
		<div className={styles.user}>
			<Skeleton className={styles.avatar} />
			<div className={styles.userInfo}>
				<Skeleton className={styles.username} />
				<Skeleton className={styles.field} />
				<Skeleton className={styles.field} />
			</div>
		</div>
	)
}

export default UserBlockLoader
