import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import AuthFields from '@/components/screens/login/AuthFields'
import { RegistrationInputs } from '@/components/screens/login/RegistrationScreen'
import Alert from '@/components/ui/Alert/Alert'
import FormInput from '@/components/ui/FormInput/FormInput'

import styles from './LoginScreen.module.scss'

interface RegistrationFieldsProps {
	register: UseFormRegister<any>
	errors: FieldErrors<RegistrationInputs>
}

const RegistrationFields: FC<RegistrationFieldsProps> = ({ register, errors }) => {
	return (
		<>
			{errors.username && <Alert text={errors.username.message!} small />}

			<FormInput
				className={styles.input}
				placeholder="Username..."
				{...register('username', {
					required: 'Username is required',
					minLength: {
						value: 4,
						message: 'Length should be more than 3',
					},
					maxLength: {
						value: 20,
						message: 'Length should be less than 21',
					},
				})}
			/>

			<AuthFields errors={errors} register={register} />

			{errors.confirmPassword && <Alert text={errors.confirmPassword.message!} small />}
			<FormInput
				className={styles.input}
				placeholder="Confirm password..."
				type="password"
				{...register('confirmPassword', {
					required: 'Confirm password is required',
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

export default RegistrationFields
