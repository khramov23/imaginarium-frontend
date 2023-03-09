import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import FileUploader from '@/components/screens/upload/UploadForm/FileUploader'
import Alert from '@/components/ui/Alert/Alert'
import Button from '@/components/ui/Button/Button'
import FormInput from '@/components/ui/FormInput/FormInput'

import { useUploadImage } from '@/hooks/mutations/useUploadImage'

import styles from './UploadForm.module.scss'

interface UploadInputs {
	title: string
	tagValues: string
}

const UploadForm = () => {
	const { upload, isLoading } = useUploadImage()

	const [file, setFile] = useState<File | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UploadInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<UploadInputs> = async (data) => {
		if (file) {
			const { title, tagValues } = data
			const formData = new FormData()
			formData.append('title', title)

			const tagValuesArr = tagValues.split(' ')
			for (let i = 0; i < tagValuesArr.length; i++) formData.append(`tagValues[${i}]`, tagValuesArr[i])

			formData.append('image', file)
			upload(formData)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!file && <Alert text={'File is required'} small />}
			<FileUploader setFile={setFile} file={file} />
			{file && <img src={URL.createObjectURL(file)} alt="" />}
			<div className={styles.formBlock}>
				{errors.title && <Alert text={errors.title.message!} small />}
				<FormInput
					placeholder={'Enter title...'}
					{...register('title', {
						required: 'Title is required',
					})}
				/>
			</div>
			<div className={styles.formBlock}>
				{errors.tagValues && <Alert text={errors.tagValues.message!} small />}
				<FormInput
					placeholder="Enter tags..."
					{...register('tagValues', {
						required: 'Tags is required',
					})}
				/>
			</div>
			<Button loading={isLoading}>Upload</Button>
		</form>
	)
}

export default UploadForm
