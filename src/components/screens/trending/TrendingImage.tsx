import React, { FC } from 'react'

import styles from './Trending.module.scss'
import {ImageByPopularTag} from "@/components/screens/trending/Trending.types";


interface TrendingImageProps {
	image: ImageByPopularTag
}

const TrendingImage: FC<TrendingImageProps> = ({ image }) => {
	return (
		<div className={styles.img}>
			<img
				src={`${process.env.REACT_APP_API_URL}/images/${image.src}`}
				alt=""
			/>
			<h3 className={styles.tag}> {image.tag}</h3>
		</div>
	)
}

export default TrendingImage
