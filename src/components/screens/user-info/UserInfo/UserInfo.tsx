import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import { IUser } from '@/types/api/user.types'

import UserInfoAdmin from '@/components/screens/user-info/UserInfo/UserInfoAdmin'
import UserInfoSettings from '@/components/screens/user-info/UserInfo/UserInfoSettings'
import Avatar from '@/components/ui/Avatar/Avatar'
import Title from '@/components/ui/Title/Title'

import { useMatchMedia } from '@/hooks/useMatchMedia'

import authStore from '@/store/auth.store'

import styles from './UserInfo.module.scss'

interface UserInfoProps {
	user: IUser
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
	const { xs } = useMatchMedia()

	return (
		<>
			{authStore.user.role === 'admin' && <UserInfoAdmin user={user} />}
			<div className={styles.userInfo}>
				<Avatar size="xl" user={user} />
				<div className={styles.infoBlock}>
					<Title>{user.username}</Title>
					<UserInfoSettings id={user._id} />
				</div>
				{!xs && (
					<>
						<div className={styles.infoBlock}>
							<Title className={styles.friendsCount}>{user.followers.length}</Title>{' '}
							<span className={styles.friendName}>followers</span>
						</div>
						<div className={styles.infoBlock}>
							<Title className={styles.friendsCount}>{user.subscriptions.length}</Title>{' '}
							<span className={styles.friendName}>subscriptions</span>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default observer(UserInfo)
