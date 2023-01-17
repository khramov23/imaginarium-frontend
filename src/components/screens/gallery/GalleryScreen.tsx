import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'

import ColorList from '@/components/screens/gallery/ColorList'
import Gallery from '@/components/ui/Gallery/Gallery'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import Select from '@/components/ui/Select/Select'
import Title from '@/components/ui/Title/Title'

import { useDebounce } from '@/hooks/useDebounce'

import { ImageService } from '@/services/imageService'

import filterStore from '@/store/filter.store'

import styles from './GalleryScreen.module.scss'
import { ColorNames, IImage } from '@/types/api/image.types'
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
	const [page, setPage] = useState(0)

	const debouncedQuery = useDebounce(filterStore.query, 500)

	// const { data: images, isLoading } = useQuery({
	// 	queryKey: [
	// 		'fetch images',
	// 		filterStore.param,
	// 		debouncedQuery,
	// 		filterStore.color,
	// 		page,
	// 	],
	// 	queryFn: () =>
	// 		ImageService.getByAttribute(
	// 			{
	// 				query: filterStore.query,
	// 				param: filterStore.param,
	// 				color: filterStore.color,
	// 			},
	// 			page
	// 		).then((response) => response.data),
	// })

	const {
		data: lazyImages,
		isLoading,
		fetchNextPage,
	} = useInfiniteQuery(
		[
			'fetch lazy images',
			filterStore.param,
			debouncedQuery,
			filterStore.color,
			page,
		],
		({ pageParam = 0 }) =>
			ImageService.getByAttribute(
				{
					query: filterStore.query,
					param: filterStore.param,
					color: filterStore.color,
				},
				pageParam
			).then((response) => response.data),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0) return undefined
				return allPages.length
			},
		}
	)
	console.log(lazyImages)

	return (
		<div className={styles.gallery}>
			<div className="container">
				<Title onClick={() => fetchNextPage()} className={styles.title}>
					Gallery
				</Title>
				<Select
					param={filterStore.param}
					options={optionValues}
					setParam={filterStore.setParam.bind(filterStore)}
					className={styles.select}
				/>
				{filterStore.param === 'color' ? (
					<ColorList
						colors={colors}
						value={filterStore.color}
						setColor={filterStore.setColor.bind(filterStore)}
					/>
				) : (
					<SearchInput
						className={styles.search}
						value={filterStore.query}
						onChange={(e) => filterStore.setQuery(e.target.value)}
					/>
				)}
				{isLoading ? (
					<Title>Loading images...</Title>
				) : lazyImages?.pages?.length && lazyImages.pages[0].length ? (
					<Gallery
						pages={lazyImages?.pages}
						fetchNextPage={fetchNextPage}
					/>
				) : (
					<Title>No images with this {filterStore.param}</Title>
				)}
			</div>
		</div>
	)
}

export default observer(GalleryScreen)
