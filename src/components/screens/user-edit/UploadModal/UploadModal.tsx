import { observer } from 'mobx-react-lite'
import React, { FC, useRef, useState } from 'react'

import CropSquare from '@/components/screens/user-edit/CropSquare/CropSquare'
import Button from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import Title from '@/components/ui/Title/Title'

import modalStore from '@/store/modal.store'

import styles from './UploadModal.module.scss'

interface UploadModalProps {
	file: File
}

const UploadModal: FC<UploadModalProps> = ({ file }) => {
	const imgRef = useRef<HTMLImageElement>(null)
	const [imgLoaded, setImgLoaded] = useState(false)
	const [left, setLeft] = useState(0)
	const [top, setTop] = useState(0)
	const [size, setSize] = useState(0.5)

	const onClose = () => {
		modalStore.setUploadAvatarModal(false)
		setImgLoaded(false)
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
					<Button>Ok</Button>
				</div>
			</div>
		</Modal>
	)
}

export default observer(UploadModal)
