import React from 'react'
import { useQuery } from 'react-query'

import Title from '@/components/ui/Title/Title'

import { ImageService } from '@/services/imageService'

import styles from './Trending.module.scss'
import TrendingImage from "@/components/screens/trending/TrendingImage";

const TrendingScreen = () => {
	const {
		isLoading,
		data: images,
	} = useQuery('4 images by popular tags', () =>
		ImageService.getByPopularTags()
	)

	return (
		<section className={styles.trending}>
			<div className="container">
				<Title
					title="Trending categories for you"
					className="text-center mb-6"
				/>

				{isLoading ? (
					<Title title={'Loading...'} />
				) : images?.length ? (
					<div className={styles.images}>
						{images.map((image) => (
							<TrendingImage image={image[0]} />
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
