import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import Avatar from '@/components/ui/Avatar/Avatar'
import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'

import { useSubscribeMutation } from '@/hooks/mutations/useSubscribeMutation'

import authStore from '@/store/auth.store'

import styles from './UserInfo.module.scss'
import { IUser } from '@/types/api/user.types'

interface UserInfoProps {
	user: IUser
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
	const { subscribe } = useSubscribeMutation()

	return (
		<div className={styles.userInfo}>
			{user && (
				<>
					<Avatar size={300} user={user} />
					<div className={styles.infoBlock}>
						<Title>{user.username}</Title>
						{authStore.user._id === user._id ? (
							<Button className={styles.button}>
								Edit profile
							</Button>
						) : (
							authStore.user.subscriptions && (
								<Button
									onClick={() => subscribe(user._id)}
									className={cls(
										styles.button,
										authStore.user.subscriptions.includes(
											user._id
										) && styles.active
									)}
								>
									{authStore.user.subscriptions.includes(
										user._id
									) ? (
										<>Unsubscribe -</>
									) : (
										<>Subscribe +</>
									)}
								</Button>
							)
						)}
					</div>
					<div className={styles.infoBlock}>
						<Title className={styles.friendsCount}>
							{user.followers.length}
						</Title>{' '}
						<span className={styles.friendName}>followers</span>
					</div>
					<div className={styles.infoBlock}>
						<Title className={styles.friendsCount}>
							{user.subscriptions.length}
						</Title>{' '}
						<span className={styles.friendName}>subscriptions</span>
					</div>
				</>
			)}
		</div>
	)
}

export default observer(UserInfo)
