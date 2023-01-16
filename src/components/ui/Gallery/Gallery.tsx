import React, { FC, MouseEventHandler, useState } from 'react'

import Image from '@/components/ui/Image/Image'
import Modal from '@/components/ui/Modal/Modal'

import { getColumns } from '@/utils/getColumns'

import styles from './Gallery.module.scss'
import { IImage } from '@/types/api/image.types'

interface GalleryProps {
	images: IImage[]
}

const columnsNum = 4
const columns = getColumns(columnsNum)

const Gallery: FC<GalleryProps> = ({ images }) => {
	const [modalVisible, setModalVisible] = useState(false)

	const openModal: MouseEventHandler = () => {
		setModalVisible(true)
	}

	const closeModal: MouseEventHandler = () => {
		setModalVisible(false)
	}

	return (
		<>
			<div className={styles.gallery}>
				{columns.map((num, colNum) => (
					<div className={styles.column} key={colNum}>
						{images.map(
							(image, index) =>
								index % columnsNum === columns[colNum] && (
									<Image
										image={image}
										key={image.src}
										onClick={openModal}
									/>
								)
						)}
					</div>
				))}
			</div>
			<Modal onClose={closeModal} visible={modalVisible}>
				123
			</Modal>
		</>
	)
}

export default Gallery
