import { observer } from 'mobx-react-lite'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Image from '@/components/ui/Image/Image'

import { getColumns } from '@/utils/getColumns'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import styles from './Gallery.module.scss'
import { IImage } from '@/types/api/image.types'

interface GalleryProps {
	pages: Array<IImage[]>
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
	hasNextPage: boolean | undefined
}

const columnsNum = 4
const columns = getColumns(columnsNum)

const Gallery: FC<GalleryProps> = ({ pages, fetchNextPage, hasNextPage }) => {
	const [position, setPosition] = useState<Position>({ page: 0, number: 0 })
	const lastElement = useRef<HTMLDivElement>(null)
	const observer = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		const callback = async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) await fetchNextPage()
		}
		observer.current = new IntersectionObserver(callback)
		observer.current?.observe(lastElement.current as HTMLDivElement)
	}, [])

	return (
		<>
			<div className={styles.gallery}>
				{columns.map((num, colNum) => (
					<div className={styles.column} key={colNum}>
						{pages.map((page, pageIndex) => (
							<React.Fragment key={pageIndex}>
								{page.map(
									(image, numberIndex) =>
										(pageIndex * filterStore.limit +
											numberIndex) %
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
							</React.Fragment>
						))}
					</div>
				))}
			</div>
			<ImageSlider
				pages={pages}
				position={position}
				setPosition={setPosition}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
			/>
			{hasNextPage && (
				<div ref={lastElement} className="h-10 invisible"></div>
			)}
		</>
	)
}

export default observer(Gallery)
