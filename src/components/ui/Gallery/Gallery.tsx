import { observer } from 'mobx-react-lite'
import React, { FC, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import { IImage } from '@/types/api/image.types'

import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Image from '@/components/ui/Image/Image'
import AuthModal from '@/components/ui/Modal/AuthModal/AuthModal'

import { useObserver } from '@/hooks/useObserver'

import { getColumns } from '@/utils/getColumns'

import authStore from '@/store/auth.store'
import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import styles from './Gallery.module.scss'

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

	const { lastElement } = useObserver(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				await fetchNextPage()
			}
		}
	)

	const onImageOpen = () => {
		if (authStore.isAuth) modalStore.setImageSliderModal(true)
		else modalStore.setAuthModal(true)
	}

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
													onImageOpen()
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
			{authStore.isAuth ? (
				<ImageSlider
					pages={pages}
					position={position}
					setPosition={setPosition}
					fetchNextPage={fetchNextPage}
				/>
			) : (
				<AuthModal />
			)}

			<div ref={lastElement} className="h-10 invisible"></div>
		</>
	)
}

export default observer(Gallery)
