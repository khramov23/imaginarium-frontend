import React, { FC, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import { IImage } from '@/types/api/image.types'

import FeedPost from '@/components/screens/feed/FeedPost/FeedPost'
import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Title from '@/components/ui/Title/Title'

import { useObserver } from '@/hooks/useObserver'

import styles from './Feed.module.scss'

interface FeedProps {
	pages: IImage[][]
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
}

const Feed: FC<FeedProps> = ({ pages, fetchNextPage }) => {
	const [position, setPosition] = useState<Position>({ page: 0, number: 0 })

	const { lastElement } = useObserver(async (entries: IntersectionObserverEntry[]) => {
		if (entries[0].isIntersecting) {
			await fetchNextPage()
		}
	})

	console.log(pages[0].length)

	return (
		<>
			{pages.length && pages[0].length ? (
				<div className={styles.feed}>
					{pages.map((page, pageIndex) => (
						<React.Fragment key={pageIndex}>
							{page.map((image, numberIndex) => (
								<FeedPost
									key={image.src}
									image={image}
									fetchNextPage={fetchNextPage}
									setPosition={setPosition}
									pageIndex={pageIndex}
									numberIndex={numberIndex}
								/>
							))}
						</React.Fragment>
					))}
					<ImageSlider
						pages={pages}
						position={position}
						setPosition={setPosition}
						fetchNextPage={fetchNextPage}
					/>
				</div>
			) : (
				<Title className={styles.title}>There is no posts! Follow other users and check their images</Title>
			)}

			<div ref={lastElement} className="h-20"></div>
		</>
	)
}

export default Feed
