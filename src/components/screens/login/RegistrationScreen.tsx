import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationInputs>()

	const [error, setError] = useState('')

	const onSubmit: SubmitHandler<RegistrationInputs> = async (data) => {
		if (data.password !== data.confirmPassword)
			setError('Password are not equal!')
		else
			await authStore
				.registration(data)
				.catch((error: ApiError) =>
					setError(error.response.data.message)
				)
	}

	return (
		<div className={styles.box}>
			<form
				action=""
				onSubmit={handleSubmit(onSubmit)}
				onChange={() => setError('')}
			>
				<Title className={styles.title}>Registration</Title>

				{error && <Alert text={error} />}
				<RegistrationFields register={register} errors={errors} />

				<Button className="block ml-auto mr-auto">Registration</Button>
				<div className="mt-5 dark:text-white text-xl">
					First time here?{' '}
					<Link to={RoutePaths.LOGIN} className="text-primary">
						Create an account!
					</Link>
				</div>
			</form>
		</div>
	)
}

export default RegistrationScreen
