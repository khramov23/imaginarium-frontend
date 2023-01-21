import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { ImageByPopularTag } from '@/components/screens/trending/Trending.types'

import { RoutePaths } from '@/router/router.types'

import filterStore from '@/store/filter.store'

import styles from './Trending.module.scss'

interface TrendingImageProps {
	image: ImageByPopularTag
}

const TrendingImage: FC<TrendingImageProps> = ({ image }) => {
	const onClick = (img: ImageByPopularTag) => {
		filterStore.setParam('tag')
		filterStore.setQuery(img.tag)
	}

	return (
		<Link
			to={RoutePaths.GALLERY}
			className={styles.img}
			onClick={() => onClick(image)}
		>
			<img
				src={`${process.env.REACT_APP_API_URL}/images/${image.src}`}
				alt=""
			/>
			<h3 className={styles.tag}> {image.tag}</h3>
		</Link>
	)
}

export default observer(TrendingImage)
