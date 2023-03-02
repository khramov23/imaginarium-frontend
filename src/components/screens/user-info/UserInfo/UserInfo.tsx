import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC, useState } from 'react'

import { IUser } from '@/types/api/user.types'

import FileUploader from '@/components/screens/upload/UploadForm/FileUploader'
import UploadModal from '@/components/screens/user-edit/UploadModal/UploadModal'
import Avatar from '@/components/ui/Avatar/Avatar'
import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'

import { useSubscribeMutation } from '@/hooks/mutations/useSubscribeMutation'

import authStore from '@/store/auth.store'
import modalStore from '@/store/modal.store'

import styles from './UserInfo.module.scss'

interface UserInfoProps {
	user: IUser
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
	const { subscribe } = useSubscribeMutation()
	const [file, setFile] = useState<File | null>(null)

	const onOpen = () => {
		modalStore.setUploadAvatarModal(true)
	}

	return (
		<div className={styles.userInfo}>
			{user && (
				<>
					<Avatar size={300} user={user} />
					<div className={styles.infoBlock}>
						<Title>{user.username}</Title>
						{authStore.user._id === user._id ? (
							<>
								<FileUploader
									setFile={setFile}
									file={file}
									onChange={onOpen}
									className={styles.button}
									text="Edit avatar"
								/>
								{file && <UploadModal file={file} />}
								<Button className={styles.button}>
									Edit password
								</Button>
							</>
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
