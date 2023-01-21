import React, { FC, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import FeedPost from '@/components/screens/feed/FeedPost/FeedPost'
import ImageSlider from '@/components/screens/image-slider/ImageSlider'
import { Position } from '@/components/ui/Gallery/Gallery.types'

import { useObserver } from '@/hooks/useObserver'

import styles from './Feed.module.scss'
import { IImage } from '@/types/api/image.types'

interface FeedProps {
	pages: IImage[][]
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
}

const Feed: FC<FeedProps> = ({ pages, fetchNextPage }) => {
	const [position, setPosition] = useState<Position>({ page: 0, number: 0 })

	const { lastElement } = useObserver(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				console.log(pages)
				await fetchNextPage()
			}
		}
	)

	return (
		<div className={styles.feed}>
			{pages.map((page, pageIndex) => (
				<>
					{page.map((image, numberIndex) => (
						<FeedPost
							image={image}
							fetchNextPage={fetchNextPage}
							setPosition={setPosition}
							pageIndex={pageIndex}
							numberIndex={numberIndex}
						/>
					))}
				</>
			))}
			<ImageSlider
				pages={pages}
				position={position}
				setPosition={setPosition}
				fetchNextPage={fetchNextPage}
			/>
			<div ref={lastElement} className="h-20"></div>
		</div>
	)
}

export default Feed
