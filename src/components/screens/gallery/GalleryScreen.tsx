import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import Title from '@/components/ui/Title/Title'

import { useDebounce } from '@/hooks/useDebounce'

import { ImageService } from '@/services/imageService'

import styles from './GalleryScreen.module.scss'
import { optionValue } from '@/types/image-search-filter.type'

const optionValues: optionValue[] = ['title', 'tag', 'color']

const GalleryScreen = () => {
	const [query, setQuery] = useState<string>('')
	const [param, setParam] = useState<optionValue>('title')

	const debouncedQuery = useDebounce(query, 500)

	useEffect(() => {
		refetch()
	}, [debouncedQuery])

	const {
		data: images,
		isLoading,
		refetch,
	} = useQuery(
		'fetch images',
		() =>
			ImageService.getByAttribute({ param, query }).then(
				(response) => response.data
			),
		{
			refetchIntervalInBackground: false,
		}
	)

	return (
		<div className={styles.gallery}>
			<div className="container">
				<Title className={styles.title}>Gallery</Title>
				<select
					className={styles.select}
					value={param}
					onChange={(e) => setParam(e.target.value as optionValue)}
				>
					{optionValues.map((optionValue) => (
						<option value={optionValue}>by {optionValue}</option>
					))}
				</select>
				<SearchInput
					className={styles.search}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{isLoading ? (
					<Title>Loading images...</Title>
				) : images?.length ? (
					<Gallery images={images} />
				) : (
					<Title>Error while fetching images occurred!</Title>
				)}
			</div>
		</div>
	)
}

export default GalleryScreen
