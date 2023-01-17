import React, { FC, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import Button from '@/components/ui/Button/Button'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Image from '@/components/ui/Image/Image'

import { getColumns } from '@/utils/getColumns'

import modalStore from '@/store/modal.store'

import styles from './Gallery.module.scss'
import { IImage } from '@/types/api/image.types'

interface GalleryProps {
	pages: Array<IImage[]>
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
}

const columnsNum = 4
const columns = getColumns(columnsNum)

const Gallery: FC<GalleryProps> = ({ pages, fetchNextPage }) => {
	const [position, setPosition] = useState<Position>({ page: 0, number: 0 })

	return (
		<>
			<div className={styles.gallery}>
				{columns.map((num, colNum) => (
					<div className={styles.column} key={colNum}>
						{pages.map((page, pageIndex) => (
							<>
								{page.map(
									(image, numberIndex) =>
										(pageIndex + numberIndex) %
											columnsNum ===
											columns[colNum] && (
											<Image
												image={image}
												key={image.src}
												onClick={() => {
													modalStore.setImageSliderModal(
														true
													)
													setPosition({
														page: pageIndex,
														number: numberIndex,
													})
												}}
											/>
										)
								)}
							</>
						))}
					</div>
				))}
			</div>
			<ImageSlider
				pages={pages}
				position={position}
				setPosition={setPosition}
			/>
			<Button onClick={() => fetchNextPage()} className={styles.load}>
				Load more...
			</Button>
		</>
	)
}

export default Gallery
