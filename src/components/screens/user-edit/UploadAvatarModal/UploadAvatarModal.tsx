import { observer } from 'mobx-react-lite'
import React, { FC, useEffect, useRef, useState } from 'react'

import CropSquare from '@/components/screens/user-edit/CropSquare/CropSquare'
import Button from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

import { useAvatarMutation } from '@/hooks/mutations/useAvatarMutation'

import modalStore from '@/store/modal.store'

import styles from './UploadAvatarModal.module.scss'

interface UploadAvatarModalProps {
	file: File
}

const UploadAvatarModal: FC<UploadAvatarModalProps> = ({ file }) => {
	const { upload, isLoading, isSuccess } = useAvatarMutation()

	const imgRef = useRef<HTMLImageElement>(null)
	const [imgLoaded, setImgLoaded] = useState(false)
	const [left, setLeft] = useState(0)
	const [top, setTop] = useState(0)
	const [size, setSize] = useState(0.5)

	const onClose = () => {
		modalStore.setUploadAvatarModal(false)
		setImgLoaded(false)
	}

	useEffect(() => {
		if (isSuccess) onClose()
	}, [isSuccess])

	const onUpload = () => {
		const formData = new FormData()
		formData.append('left', left.toString())
		formData.append('top', top.toString())
		formData.append('size', size.toString())
		formData.append('avatar', file)
		upload(formData)
	}

	return (
		<Modal onClose={onClose} visible={modalStore.uploadAvatarModal}>
			<div className={styles.box}>
				<div className={styles.leftPart}>
					<img
						ref={imgRef}
						src={URL.createObjectURL(file)}
						alt={'your avatar'}
						onLoad={() => setImgLoaded(true)}
					/>
					{imgLoaded && imgRef.current && (
						<CropSquare
							imgRef={imgRef}
							setLeft={setLeft}
							setTop={setTop}
							setSize={setSize}
						/>
					)}
				</div>
				<div className={styles.rightPart}>
					<Title>Your avatar</Title>
					<div className={styles.imgPreview}>
						<img
							src={URL.createObjectURL(file)}
							alt={'your avatar'}
							style={{
								width: `${100 / size}%`,
								transform: `translate(-${100 * left}%, -${
									100 * top
								}%)`,
							}}
						/>
					</div>
					<Button loading={isLoading} onClick={onUpload}>
						Ok
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default observer(UploadAvatarModal)
