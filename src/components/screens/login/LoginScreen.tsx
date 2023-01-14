import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button/Button'
import TextInput from '@/components/ui/TextInput/TextInput'
import Title from '@/components/ui/Title/Title'

import styles from './LoginScreen.module.scss'
import { RoutePaths } from '@/router/router.types'

interface LoginForm {
	email: string
	password: string
}

const LoginScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>()

	const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data)

	return (
		<div className={styles.box}>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<Title title="Login" className={styles.title} />

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

				<Button text="Login" className="block ml-auto mr-auto" />
				<div className="mt-5 dark:text-white text-xl">
					First time here?{' '}
					<Link to={RoutePaths.REGISTER} className="text-primary">
						Create an account!
					</Link>
				</div>
			</form>
		</div>
	)
}

export default LoginScreen
