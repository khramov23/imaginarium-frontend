import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { LoginInputs } from '@/components/screens/login/LoginScreen'
import Alert from '@/components/ui/Alert/Alert'
import FormInput from '@/components/ui/FormInput/FormInput'

import { emailPattern } from '@/utils/emailPattern'

export interface AuthFieldsProps {
	errors: FieldErrors<LoginInputs>
	register: UseFormRegister<any>
}

const AuthFields: FC<AuthFieldsProps> = ({ errors, register }) => {
	return (
		<>
			{errors.email && <Alert text={errors.email.message!} small />}
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

			{errors.password && <Alert text={errors.password.message!} small />}
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
