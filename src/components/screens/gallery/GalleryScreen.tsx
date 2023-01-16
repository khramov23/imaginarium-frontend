import React, { useState } from 'react'
import { useQuery } from 'react-query'

import ColorList from '@/components/screens/gallery/ColorList'
import Gallery from '@/components/ui/Gallery/Gallery'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import Select from '@/components/ui/Select/Select'
import Title from '@/components/ui/Title/Title'

import { useDebounce } from '@/hooks/useDebounce'

import { ImageService } from '@/services/imageService'

import styles from './GalleryScreen.module.scss'
import { ColorNames } from '@/types/api/image.types'
import { optionValue } from '@/types/image-search-filter.type'

const optionValues: optionValue[] = ['title', 'tag', 'color']
const colors: ColorNames[] = [
	ColorNames.RED,
	ColorNames.PINK,
	ColorNames.BLUE,
	ColorNames.CYAN,
	ColorNames.GREEN,
	ColorNames.YELLOW,
	ColorNames.BLACK,
	ColorNames.WHITE,
]

const GalleryScreen = () => {
	const [query, setQuery] = useState<string>('')
	const [color, setColor] = useState<ColorNames | null>(null)
	const [param, setParam] = useState<optionValue>('title')

	const debouncedQuery = useDebounce(query, 500)

	const { data: images, isLoading } = useQuery({
		queryKey: ['fetch images', param, debouncedQuery, color],
		queryFn: () =>
			ImageService.getByAttribute({ param, query, color }).then(
				(response) => response.data
			),
	})

	return (
		<div className={styles.gallery}>
			<div className="container">
				<Title className={styles.title}>Gallery</Title>
				<Select
					param={param}
					options={optionValues}
					setParam={setParam}
					className={styles.select}
				/>
				{param === 'color' ? (
					<ColorList
						colors={colors}
						value={color}
						setColor={setColor}
					/>
				) : (
					<SearchInput
						className={styles.search}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				)}
				{isLoading ? (
					<Title>Loading images...</Title>
				) : images?.length ? (
					<Gallery images={images} />
				) : (
					<Title>No images with this {param}</Title>
				)}
			</div>
		</div>
	)
}

export default GalleryScreen
