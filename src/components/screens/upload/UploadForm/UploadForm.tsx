import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FileUploader from '@/components/screens/upload/UploadForm/FileUploader'
import Button from '@/components/ui/Button/Button'
import FormInput from '@/components/ui/FormInput/FormInput'

import { useUploadImage } from '@/hooks/mutations/useUploadImage'

import { RoutePaths } from '@/router/router.types'

import authStore from '@/store/auth.store'

import styles from './UploadForm.module.scss'

const UploadForm = () => {
	const { upload } = useUploadImage()
	const navigate = useNavigate()

	const [file, setFile] = useState<File | null>(null)
	const [title, setTitle] = useState('')
	const [tagValues, setTagValues] = useState('')

	const onUpload = () => {
		const formData = new FormData()
		formData.append('title', title)
		const tagValuesArr = tagValues.split(' ')
		for (let i = 0; i < tagValuesArr.length; i++)
			formData.append(`tagValues[${i}]`, tagValuesArr[i])
		if (file) formData.append('image', file)
		upload(formData)
		navigate(RoutePaths.USERS + '/' + authStore.user._id)
	}

	return (
		<div className={styles.form}>
			<FileUploader setFile={setFile} file={file} />
			{file && <img src={URL.createObjectURL(file)} alt="" />}
			<FormInput
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder={'Enter title...'}
			/>
			<FormInput
				value={tagValues}
				onChange={(e) => setTagValues(e.target.value)}
				placeholder="Enter tags..."
			/>
			<Button onClick={onUpload}>Upload</Button>
		</div>
	)
}

export default UploadForm
