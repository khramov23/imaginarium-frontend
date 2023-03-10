import React, { FC, useState } from 'react'

import { IImage } from '@/types/api/image.types'

import Button from '@/components/ui/Button/Button'
import ConfirmModal from '@/components/ui/Modal/ConfirmModal/ConfirmModal'

import { useDeleteImageMutation } from '@/hooks/mutations/useDeleteImageMutation'

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

	return (
		<>
			<Button onClick={onModalOpen}>Delete</Button>
			<ConfirmModal
				title="Delete this image?"
				actionName="Delete"
				visible={modal}
				onClose={onModalClose}
				confirmLoading={isDeleteImageLoading}
				confirmSuccess={isSuccess}
				handler={onImageDelete}
			/>
		</>
	)
}

export default ImageInfoAdmin
