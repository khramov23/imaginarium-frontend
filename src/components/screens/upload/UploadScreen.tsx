import React from 'react'

import UploadForm from '@/components/screens/upload/UploadForm/UploadForm'
import Title from '@/components/ui/Title/Title'

import styles from './UploadScreen.module.scss'

const UploadScreen = () => {
	return (
		<div className={styles.screen}>
			<div className={styles.box}>
				<Title>Upload your image!</Title>
				<UploadForm />
			</div>
		</div>
	)
}

export default UploadScreen
