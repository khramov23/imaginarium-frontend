import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import Select from '@/components/ui/Select/Select'
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
		console.log(param)
	}, [debouncedQuery, param])

	const {
		data: images,
		isLoading,
		refetch,
	} = useQuery('fetch images', () =>
		ImageService.getByAttribute({ param, query }).then(
			(response) => response.data
		)
	)

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
