import { observer } from 'mobx-react-lite'
import React from 'react'

import { ColorNames } from '@/types/api/image.types'
import { optionValue } from '@/types/image-search-filter.type'

import ColorList from '@/components/screens/gallery/ColorList'
import { useSearchedImages } from '@/components/screens/gallery/useImages'
import Gallery from '@/components/ui/Gallery/Gallery'
import SearchInput from '@/components/ui/SearchInput/SearchInput'
import Select from '@/components/ui/Select/Select'
import GalleryLoader from '@/components/ui/Skeletons/GalleryLoader/GalleryLoader'
import Title from '@/components/ui/Title/Title'

import { useDebounce } from '@/hooks/useDebounce'

import filterStore from '@/store/filter.store'

import styles from './GalleryScreen.module.scss'

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
	const debouncedQuery = useDebounce(filterStore.query, 500)

	const {
		data: lazyImages,
		isLoading,
		fetchNextPage,
	} = useSearchedImages(debouncedQuery)

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
					<GalleryLoader />
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
