import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { ILogin } from '@/types/api/auth.types'
import { ApiError } from '@/types/api/axios.types'

import AuthFields from '@/components/screens/login/AuthFields'
import Alert from '@/components/ui/Alert/Alert'
import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'

import styles from './LoginScreen.module.scss'

export interface LoginInputs extends ILogin {}

const LoginScreen = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>({
		mode: 'onBlur',
	})

	const [error, setError] = useState('')

	const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
		authStore
			.login(data)
			.then(() => navigate(RoutePaths.GALLERY))
			.catch((error: ApiError) => setError(error.response.data.message))
	}

	return (
		<div className={styles.box}>
			<form onSubmit={handleSubmit(onSubmit)} onChange={() => setError('')}>
				<Title className={styles.title}>Login</Title>

				{error && <Alert className={styles.alert} text={error} />}
				<AuthFields register={register} errors={errors} />

				<Button className={styles.button} loading={authStore.isLoading}>
					Login
				</Button>
				<div className={styles.register}>
					First time here?
					<Link to={RoutePaths.REGISTRATION} className={styles.link}>
						Create an account!
					</Link>
				</div>
			</form>
		</div>
	)
}

export default observer(LoginScreen)
