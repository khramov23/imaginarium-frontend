import React, { FC } from 'react'

import Avatar from '@/components/ui/Avatar/Avatar'
import Title from '@/components/ui/Title/Title'

import styles from './User.module.scss'
import { IUser } from '@/types/user.types'

interface UserProps {
	user: IUser
}

const User: FC<UserProps> = ({ user }) => {
	return (
		<div className={styles.user}>
			<Avatar user={user} size={100} />
			<div className={styles.userInfo}>
				<Title title={user.username} />
				<span className={styles.field}>
					{user.subscriptions.length} subscriptions
				</span>
				<span className={styles.field}>
					{user.followers.length} followers
				</span>
			</div>
		</div>
	)
}

export default User
