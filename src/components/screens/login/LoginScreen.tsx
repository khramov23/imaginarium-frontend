import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button/Button'
import TextInput from '@/components/ui/TextInput/TextInput'
import Title from '@/components/ui/Title/Title'

import authStore from '@/store/auth.store'

import styles from './LoginScreen.module.scss'
import { RoutePaths } from '@/router/router.types'
import { ILogin } from '@/types/api/auth.types'

interface LoginInputs extends ILogin {}

const LoginScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>()

	const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
		await authStore.login(data)
	}

	return (
		<div className={styles.box}>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<Title className={styles.title}>Login</Title>

				{errors.email && (
					<span className="text-primary">This field is required</span>
				)}
				<TextInput
					className="w-full mb-5"
					placeholder="E-mail..."
					{...register('email', {
						required: true,
					})}
				/>

				{errors.password && (
					<span className="text-primary">This field is required</span>
				)}
				<TextInput
					className="w-full mb-5"
					placeholder="Password..."
					type="password"
					{...register('password', {
						required: true,
					})}
				/>

				<Button className="block ml-auto mr-auto">Login</Button>
				<div className="mt-5 dark:text-white text-xl">
					First time here?{' '}
					<Link to={RoutePaths.REGISTRATION} className="text-primary">
						Create an account!
					</Link>
				</div>
			</form>
		</div>
	)
}

export default LoginScreen
