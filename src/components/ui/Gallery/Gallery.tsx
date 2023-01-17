import React, { FC, useState } from 'react'

import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import Image from '@/components/ui/Image/Image'

import { getColumns } from '@/utils/getColumns'

import modalStore from '@/store/modal.store'

import styles from './Gallery.module.scss'
import { IImage } from '@/types/api/image.types'

interface GalleryProps {
	images: IImage[]
}

const columnsNum = 4
const columns = getColumns(columnsNum)

const Gallery: FC<GalleryProps> = ({ images }) => {
	const [imageNumber, setImageNumber] = useState(0)

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
										onClick={() => {
											modalStore.setImageSliderModal(true)
											setImageNumber(index)
										}}
									/>
								)
						)}
					</div>
				))}
			</div>
			<ImageSlider
				images={images}
				number={imageNumber}
				setNumber={setImageNumber}
			/>
		</>
	)
}

export default Gallery
