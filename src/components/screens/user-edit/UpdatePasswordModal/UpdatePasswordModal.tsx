import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ApiError } from '@/types/api/axios.types'

import Alert from '@/components/ui/Alert/Alert'
import Button from '@/components/ui/Button/Button'
import FormInput from '@/components/ui/FormInput/FormInput'
import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

import { useUpdatePasswordMutation } from '@/hooks/mutations/useUpdatePasswordMutation'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'
import modalStore from '@/store/modal.store'

import styles from './UpdatePasswordModal.module.scss'

interface UpdatePasswordInputs {
	oldPassword: string
	newPassword: string
}

const UpdatePasswordModal = () => {
	const navigate = useNavigate()
	const {
		update,
		isLoading,
		isSuccess,
		isError,
		error: updatePasswordError,
	} = useUpdatePasswordMutation()
	const onClose = () => {
		modalStore.setUpdatePasswordModal(false)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdatePasswordInputs>({
		mode: 'onBlur',
	})

	useEffect(() => {
		if (isSuccess) {
			modalStore.setUpdatePasswordModal(false)
			authStore.logout().then(() => {
				navigate(RoutePaths.LOGIN)
			})
		}
		if (isError)
			setError((updatePasswordError as ApiError).response.data.message)
	}, [isSuccess, isError])

	const [error, setError] = useState('')

	const onSubmit: SubmitHandler<UpdatePasswordInputs> = async (data) => {
		update(data)
	}

	return (
		<Modal visible={modalStore.updatePasswordModal} onClose={onClose}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Title className={styles.title}>Change password</Title>
				{error && <Alert className={styles.alert} text={error} />}
				{errors.oldPassword && (
					<span className={styles.inputError}>
						{errors.oldPassword.message}
					</span>
				)}
				<FormInput
					placeholder="Old password..."
					className={styles.input}
					type="password"
					{...register('oldPassword', {
						required: 'Old password is required',
						minLength: {
							value: 6,
							message: 'Min length should be 6',
						},
						maxLength: {
							value: 16,
							message: 'Max length should be 16',
						},
					})}
				/>
				{errors.newPassword && (
					<span className={styles.inputError}>
						{errors.newPassword.message}
					</span>
				)}
				<FormInput
					placeholder="New password..."
					className={styles.input}
					type="password"
					{...register('newPassword', {
						required: 'New password is required',
						minLength: {
							value: 6,
							message: 'Min length should be 6',
						},
						maxLength: {
							value: 16,
							message: 'Max length should be 16',
						},
					})}
				/>
				<Button loading={isLoading} className={styles.button}>
					Update
				</Button>
			</form>
		</Modal>
	)
}

export default observer(UpdatePasswordModal)
