import React, { FC, useEffect, useState } from 'react'

import { IImage } from '@/types/api/image.types'

import Button from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

import { useDeleteImageMutation } from '@/hooks/mutations/useDeleteImageMutation'

import styles from './ImageInfo.module.scss'

interface ImageInfoAdminProps {
	image: IImage
}

const ImageInfoAdmin: FC<ImageInfoAdminProps> = ({ image }) => {
	const { deleteImage, isLoading: isDeleteImageLoading, isSuccess } = useDeleteImageMutation()
	const [modal, setModal] = useState(false)

	const onImageDelete = () => {
		deleteImage(image._id)
	}

	const onModalClose = () => {
		setModal(false)
	}

	const onModalOpen = () => {
		setModal(true)
	}

	useEffect(() => {
		if (isSuccess) onModalClose()
	}, [isSuccess])

	return (
		<>
			<Button onClick={onModalOpen}>Delete</Button>
			<Modal visible={modal} onClose={onModalClose}>
				<div className={styles.adminContent}>
					<Title>Delete this image?</Title>
					<div className={styles.modalButtons}>
						<Button loading={isDeleteImageLoading} onClick={onImageDelete}>
							Delete
						</Button>
						<Button onClick={onModalClose}>No</Button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default ImageInfoAdmin
