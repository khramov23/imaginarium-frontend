import React, { FC } from 'react'
import { useQuery } from 'react-query'

import ColorPercentage from '@/components/screens/image-slider/ImageInfo/ColorPercentage/ColorPercentage'
import Tags from '@/components/screens/image-slider/ImageInfo/Tags/Tags'
import Author from '@/components/ui/Author/Author'
import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'

import { UserService } from '@/services/userService'

import { capitalizedText } from '@/utils/capitalizedText'

import styles from './ImageInfo.module.scss'
import { IImage } from '@/types/api/image.types'

interface ImageInfoProps {
	image: IImage
}

const ImageInfo: FC<ImageInfoProps> = ({ image }) => {
	const { data: user, isLoading: isUserLoading } = useQuery({
		queryKey: ['fetch user by id', image.author],
		queryFn: () =>
			UserService.fetchUserById(image.author).then(
				(response) => response.data
			),
	})

	return (
		<div className={styles.info}>
			<Title>{capitalizedText(image.title)}</Title>
			<div className={styles.username}>
				{isUserLoading ? (
					<>loading...</>
				) : user ? (
					<Author author={user} />
				) : (
					<>unknown</>
				)}
			</div>
			<Tags tags={image.tags} />
			<ColorPercentage colors={image.colors} />
			<div className={styles.buttons}>
				<Button>Like {image.likes}</Button>
				<Button>Download</Button>
			</div>
		</div>
	)
}

export default ImageInfo
