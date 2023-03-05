import React from 'react'

import UserBlockLoader from '@/components/ui/Skeletons/UserBlockLoader/UserBlockLoader'

import styles from './UserBlockLoader.module.scss'

const UserListLoader = () => {
	return (
		<div className={styles.list}>
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
			<UserBlockLoader />
		</div>
	)
}

export default UserListLoader
