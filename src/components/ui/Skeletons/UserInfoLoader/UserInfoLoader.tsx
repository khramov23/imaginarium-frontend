import React from 'react'

import AvatarLoader from '@/components/ui/Skeletons/AvatarLoader/AvatarLoader'
import Skeleton from '@/components/ui/Skeletons/Skeleton'

import { useMatchMedia } from '@/hooks/useMatchMedia'

import styles from './UserInfoLoader.module.scss'

const UserInfoLoader = () => {
	const { xs } = useMatchMedia()

	return (
		<div className={styles.userInfo}>
			<AvatarLoader size="xl" />
			<div className={styles.infoBlock}>
				<Skeleton className={styles.username} />
				<Skeleton className={styles.button} />
			</div>
			{!xs && (
				<>
					<div className={styles.infoBlock}>
						<Skeleton className={styles.friendsCount} />
						<span className={styles.friendName}>followers</span>
					</div>
					<div className={styles.infoBlock}>
						<Skeleton className={styles.friendsCount} />
						<span className={styles.friendName}>subscriptions</span>
					</div>
				</>
			)}
		</div>
	)
}

export default UserInfoLoader
