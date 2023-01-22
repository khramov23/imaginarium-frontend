import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { useQuery } from 'react-query'

import { IImage } from '@/types/api/image.types'

import ColorPercentage from '@/components/screens/image-slider/ImageInfo/ColorPercentage/ColorPercentage'
import Tags from '@/components/screens/image-slider/ImageInfo/Tags/Tags'
import Author from '@/components/ui/Author/Author'
import Button from '@/components/ui/Button/Button'
import AuthorLoader from '@/components/ui/Skeletons/AuthorLoader/AuthorLoader'
import Title from '@/components/ui/Title/Title'

import { useLikes } from '@/hooks/mutations/useLikes'
import { useUserInfo } from '@/hooks/queries/useUserInfo'

import { ImageService } from '@/services/imageService'

import { capitalizedText } from '@/utils/capitalizedText'

import authStore from '@/store/auth.store'

import styles from './ImageInfo.module.scss'

interface ImageInfoProps {
	image: IImage
}

const ImageInfo: FC<ImageInfoProps> = ({ image }) => {
	const { data: user, isLoading: isUserLoading } = useUserInfo(image.author)

	const { like } = useLikes()

	const liked =
		authStore.isAuth && authStore.user.favorites.includes(image._id)

	const { data: img, isLoading: likesLoading } = useQuery(
		['fetch image by id', liked],
		() => {
			console.log('update likes')
			return ImageService.getById(image._id).then(
				(response) => response.data
			)
		}
	)

	return (
		<div className={styles.info}>
			<Title>{capitalizedText(image.title)}</Title>
			<div className={styles.username}>
				{isUserLoading ? (
					<AuthorLoader />
				) : user ? (
					<Author author={user} />
				) : (
					<>unknown</>
				)}
			</div>
			<Tags tags={image.tags} />
			<ColorPercentage colors={image.colors} />
			<div className={styles.buttons}>
				<Button
					className={cls(liked && styles.active)}
					onClick={() => like(image._id)}
				>
					{/*Like {image.likes}*/}
					Like {likesLoading ? image.likes : img?.likes}
				</Button>
			</div>
		</div>
	)
}

export default observer(ImageInfo)
