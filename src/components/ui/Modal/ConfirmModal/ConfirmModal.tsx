import React, { FC, useEffect } from 'react'

import styles from '@/components/screens/image-slider/ImageInfo/ImageInfo.module.scss'
import Button from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

interface ConfirmModal {
	title: string
	actionName: string
	visible: boolean
	onClose: () => void
	confirmLoading: boolean
	confirmSuccess: boolean
	handler: () => void
}

const ConfirmModal: FC<ConfirmModal> = (props) => {
	const { title, visible, onClose, confirmLoading, confirmSuccess, actionName, handler } = props

	useEffect(() => {
		if (confirmSuccess) onClose()
	}, [confirmSuccess])

	return (
		<Modal visible={visible} onClose={onClose}>
			<div className={styles.adminContent}>
				<Title>{title}</Title>
				<div className={styles.modalButtons}>
					<Button loading={confirmLoading} onClick={handler}>
						{actionName}
					</Button>
					<Button onClick={onClose}>No</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ConfirmModal
