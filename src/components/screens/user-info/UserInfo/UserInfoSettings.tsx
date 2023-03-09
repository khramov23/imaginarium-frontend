import cls from 'classnames'
import React, { FC, useState } from 'react'

import FileUploader from '@/components/screens/upload/UploadForm/FileUploader'
import UpdatePasswordModal from '@/components/screens/user-edit/UpdatePasswordModal/UpdatePasswordModal'
import UploadAvatarModal from '@/components/screens/user-edit/UploadAvatarModal/UploadAvatarModal'
import Button from '@/components/ui/Button/Button'

import { useSubscribeMutation } from '@/hooks/mutations/useSubscribeMutation'

import authStore from '@/store/auth.store'
import modalStore from '@/store/modal.store'

import styles from './UserInfo.module.scss'

interface UserInfoSettingsProps {
	id: string
}

const UserInfoSettings: FC<UserInfoSettingsProps> = ({ id }) => {
	const [file, setFile] = useState<File | null>(null)
	const { subscribe, isLoading } = useSubscribeMutation()

	const onUploadAvatarModalOpen = () => {
		modalStore.setUploadAvatarModal(true)
	}

	const onUpdatePasswordModalOpen = () => {
		modalStore.setUpdatePasswordModal(true)
	}

	const onSubscribe = () => {
		subscribe(id)
	}

	return authStore.user._id === id ? (
		<>
			<FileUploader
				setFile={setFile}
				file={file}
				onChange={onUploadAvatarModalOpen}
				className={styles.button}
				text="Edit avatar"
			/>
			{file && <UploadAvatarModal file={file} />}
			<Button className={styles.button} onClick={onUpdatePasswordModalOpen}>
				Edit password
			</Button>
			<UpdatePasswordModal />
		</>
	) : (
		authStore.user.subscriptions && (
			<Button
				onClick={onSubscribe}
				className={cls(styles.button)}
				theme={authStore.user.subscriptions.includes(id) ? 'fill' : 'outline'}
				loading={isLoading}
			>
				{authStore.user.subscriptions.includes(id) ? <>Unsubscribe -</> : <>Subscribe +</>}
			</Button>
		)
	)
}

export default UserInfoSettings
