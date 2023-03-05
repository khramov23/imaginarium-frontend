import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import { IImage } from '@/types/api/image.types'

import ColorPercentage from '@/components/screens/image-slider/ImageInfo/ColorPercentage/ColorPercentage'
import Tags from '@/components/screens/image-slider/ImageInfo/Tags/Tags'
import Author from '@/components/ui/Author/Author'
import Button from '@/components/ui/Button/Button'
import AuthorLoader from '@/components/ui/Skeletons/AuthorLoader/AuthorLoader'
import Title from '@/components/ui/Title/Title'

import { useLikes } from '@/hooks/mutations/useLikes'
import { useUserInfo } from '@/hooks/queries/useUserInfo'

import { capitalizedText } from '@/utils/capitalizedText'

import authStore from '@/store/auth.store'
import modalStore from '@/store/modal.store'

import styles from './ImageInfo.module.scss'

interface ImageInfoProps {
	image: IImage
}

const ImageInfo: FC<ImageInfoProps> = ({ image }) => {
	const { data: user, isLoading: isUserLoading } = useUserInfo(image.author)

	const { like, isLoading } = useLikes()

	const liked = authStore.isAuth && authStore.user.favorites.includes(image._id)

	const onAuthorClick = () => {
		modalStore.setImageSliderModal(false)
	}

	return (
		<div className={styles.info}>
			<Title>{capitalizedText(image.title)}</Title>
			<div className={styles.username}>
				{isUserLoading ? (
					<AuthorLoader />
				) : user ? (
					<Author onClick={onAuthorClick} author={user} />
				) : (
					<>unknown</>
				)}
			</div>
			<Tags tags={image.tags} />
			<ColorPercentage colors={image.colors} />
			<div className={styles.buttons}>
				<Button
					theme={liked ? 'fill' : 'outline'}
					onClick={() => like(image._id)}
					loading={isLoading}
				>
					Like {image.likes}
				</Button>
			</div>
		</div>
	)
}

export default observer(ImageInfo)
