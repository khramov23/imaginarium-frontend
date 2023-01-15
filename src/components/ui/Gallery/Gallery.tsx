import React, { FC } from 'react'

import Image from '@/components/ui/Image/Image'

import { getColumns } from '@/utils/getColumns'

import styles from './Gallery.module.scss'
import { IImage } from '@/types/api/image.types'

interface GalleryProps {
	images: IImage[]
}

const columnsNum = 4
const columns = getColumns(columnsNum)

const Gallery: FC<GalleryProps> = ({ images }) => {
	return (
		<div className={styles.gallery}>
			{columns.map((num, colNum) => (
				<div className={styles.column}>
					{images.map(
						(image, index) =>
							index % columnsNum === columns[colNum] && (
								<Image image={image} />
							)
					)}
				</div>
			))}
		</div>
	)
}

export default Gallery
