import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import AuthFields from '@/components/screens/login/AuthFields'
import styles from '@/components/screens/login/LoginScreen.module.scss'
import { RegistrationInputs } from '@/components/screens/login/RegistrationScreen'
import FormInput from '@/components/ui/FormInput/FormInput'

interface RegistrationFieldsProps {
	register: UseFormRegister<any>
	errors: FieldErrors<RegistrationInputs>
}

const RegistrationFields: FC<RegistrationFieldsProps> = ({ register, errors }) => {
	return (
		<>
			{errors.username && <span className={styles.inputError}>{errors.username.message}</span>}
			<FormInput
				className="w-full mb-5"
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

			{errors.confirmPassword && (
				<span className="block mb-2 text-primary text-lg">Confirm password is required</span>
			)}
			<FormInput
				className="w-full mb-5"
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
