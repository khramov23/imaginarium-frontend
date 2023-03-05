import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { IRegistration } from '@/types/api/auth.types'
import { ApiError } from '@/types/api/axios.types'

import RegistrationFields from '@/components/screens/login/RegistrationFields'
import Alert from '@/components/ui/Alert/Alert'
import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'

import styles from './LoginScreen.module.scss'

export interface RegistrationInputs extends IRegistration {
	confirmPassword: string
}

const RegistrationScreen = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationInputs>()

	const [error, setError] = useState('')

	const onSubmit: SubmitHandler<RegistrationInputs> = async (data) => {
		if (data.password !== data.confirmPassword) setError('Passwords are not equal!')
		else
			await authStore
				.registration(data)
				.then(() => navigate(RoutePaths.GALLERY))
				.catch((error: ApiError) => setError(error.response.data.message))
	}

	return (
		<div className={styles.box}>
			<form action="" onSubmit={handleSubmit(onSubmit)} onChange={() => setError('')}>
				<Title className={styles.title}>Registration</Title>

				{error && <Alert text={error} className={styles.alert} />}
				<RegistrationFields register={register} errors={errors} />

				<Button className={styles.button} loading={authStore.isLoading}>
					Registration
				</Button>
				<div className={styles.register}>
					Already have an account?
					<Link to={RoutePaths.LOGIN} className={styles.link}>
						Login!
					</Link>
				</div>
			</form>
		</div>
	)
}

export default observer(RegistrationScreen)
