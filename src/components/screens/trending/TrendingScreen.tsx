import React from 'react'
import { useQuery } from 'react-query'

import Title from '@/components/ui/Title/Title'

import { ImageService } from '@/services/imageService'

import styles from './Trending.module.scss'

const TrendingScreen = () => {
	const {
		isLoading,
		data: images,
	} = useQuery('4 images by popular tags', () =>
		ImageService.getByPopularTags()
	)

	console.log(images)

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
							<div className={styles.img}>
								<img
									src={`${process.env.REACT_APP_API_URL}/images/${image[0].src}`}
									alt=""
								/>
								<h3 className={styles.tag}> {image[0].tag}</h3>
							</div>
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
