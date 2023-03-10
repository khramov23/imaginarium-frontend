import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { IUser } from '@/types/api/user.types'

import Avatar from '@/components/ui/Avatar/Avatar'
import Title from '@/components/ui/Title/Title'

import { RoutePaths } from '@/router/router.types'

import styles from './User.module.scss'

interface UserProps {
	user: IUser
}

const User: FC<UserProps> = ({ user }) => {
	return (
		<Link to={`${RoutePaths.USERS}/${user._id}`} className={styles.user}>
			<Avatar size="lg" user={user} />
			<div className={styles.userInfo}>
				<Title className={styles.username}>{user.username}</Title>
				<span className={styles.field}>{user.subscriptions.length} subscriptions</span>
				<span className={styles.field}>{user.followers.length} followers</span>
			</div>
		</Link>
	)
}

export default User
