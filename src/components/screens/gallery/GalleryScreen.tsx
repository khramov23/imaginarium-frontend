import React from 'react'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import Title from '@/components/ui/Title/Title'

import { ImageService } from '@/services/imageService'

const GalleryScreen = () => {
	const { data: images, isLoading } = useQuery('fetch images', () =>
		ImageService.getAll().then((response) => response.data)
	)

	return (
		<div>
			<div className="container">
				<Title>Gallery</Title>
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
