import React from 'react'
import { useQuery } from 'react-query'

import TrendingImage from '@/components/screens/trending/TrendingImage'
import TrendingLoader from '@/components/ui/Skeletons/TrendingLoader/TrendingLoader'
import Title from '@/components/ui/Title/Title'

import { ImageService } from '@/services/imageService'

import styles from './Trending.module.scss'

const TrendingScreen = () => {
	const { isLoading, data: images } = useQuery(['images', 'tags'], () => ImageService.getByPopularTags())

	return (
		<section className={styles.trending}>
			<div className="container">
				<Title className={styles.title}>Trending categories for you</Title>

				{isLoading ? (
					<TrendingLoader />
				) : images?.length ? (
					<div className={styles.images}>
						{images!.map((image) => (
							<TrendingImage image={image[0]} key={image[0].src} />
						))}
					</div>
				) : (
					<h1>Error occurred</h1>
				)}
			</div>
		</section>
	)
}

export default TrendingScreen
