import React from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './UserInfoLoader.module.scss'

const UserInfoLoader = () => {
	return (
		<div className={styles.userInfo}>
			<Skeleton className={styles.avatar} />
			<div className={styles.infoBlock}>
				<Skeleton className={styles.username} />
				<Skeleton className={styles.button} />
			</div>
			<div className={styles.infoBlock}>
				<Skeleton className={styles.friendsCount} />
				<span className={styles.friendName}>followers</span>
			</div>
			<div className={styles.infoBlock}>
				<Skeleton className={styles.friendsCount} />
				<span className={styles.friendName}>subscriptions</span>
			</div>
		</div>
	)
}

export default UserInfoLoader
