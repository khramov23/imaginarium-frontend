import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button/Button'
import FormInput from '@/components/ui/FormInput/FormInput'
import Title from '@/components/ui/Title/Title'

import authStore from '@/store/auth.store'

import styles from './LoginScreen.module.scss'
import { RoutePaths } from '@/router/router.types'
import { IRegistration } from '@/types/api/auth.types'

interface RegistrationInputs extends IRegistration {
	confirmPassword: string
}

const RegistrationScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationInputs>()

	const onSubmit: SubmitHandler<RegistrationInputs> = async (data) => {
		await authStore.registration(data)
	}

	return (
		<div className={styles.box}>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<Title className={styles.title}>Registration</Title>

				{errors.username && (
					<span className="text-primary">This field is required</span>
				)}
				<FormInput
					className="w-full mb-5"
					placeholder="Username..."
					{...register('username', {
						required: true,
					})}
				/>

				{errors.email && (
					<span className="text-primary">This field is required</span>
				)}
				<FormInput
					className="w-full mb-5"
					placeholder="E-mail..."
					{...register('email', {
						required: true,
					})}
				/>

				{errors.password && (
					<span className="text-primary">This field is required</span>
				)}
				<FormInput
					className="w-full mb-5"
					placeholder="Password..."
					type="password"
					{...register('password', {
						required: true,
					})}
				/>

				{errors.confirmPassword && (
					<span className="text-primary">This field is required</span>
				)}
				<FormInput
					className="w-full mb-5"
					placeholder="Confirm password..."
					type="password"
					{...register('confirmPassword', {
						required: true,
					})}
				/>

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
