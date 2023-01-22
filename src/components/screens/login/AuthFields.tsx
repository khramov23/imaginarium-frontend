import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { LoginInputs } from '@/components/screens/login/LoginScreen'
import FormInput from '@/components/ui/FormInput/FormInput'

import { emailPattern } from '@/utils/emailPattern'

import styles from './LoginScreen.module.scss'

export interface AuthFieldsProps {
	errors: FieldErrors<LoginInputs>
	register: UseFormRegister<any>
}

const AuthFields: FC<AuthFieldsProps> = ({ errors, register }) => {
	return (
		<>
			{errors.email && (
				<span className={styles.inputError}>
					{errors.email.message}
				</span>
			)}
			<FormInput
				className="w-full mb-5"
				placeholder="E-mail..."
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: emailPattern,
						message: 'Invalid email',
					},
				})}
			/>

			{errors.password && (
				<span className={styles.inputError}>
					{errors.password.message}
				</span>
			)}
			<FormInput
				className="w-full mb-5"
				placeholder="Password..."
				type="password"
				{...register('password', {
					required: 'Password is required',
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
		</>
	)
}

export default AuthFields
