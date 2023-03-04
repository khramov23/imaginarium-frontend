import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC, MouseEventHandler } from 'react'
import { FaHeart } from 'react-icons/fa'

import { IImage } from '@/types/api/image.types'

import { getImage } from '@/http/api.paths'

import { useLikes } from '@/hooks/mutations/useLikes'

import authStore from '@/store/auth.store'

import styles from './Image.module.scss'

interface ImageProps {
	image: IImage
	onClick: MouseEventHandler<HTMLDivElement>
}

const Image: FC<ImageProps> = ({ image, onClick }) => {
	const { like } = useLikes()

	const liked = authStore.isAuth && authStore.user.favorites.includes(image._id)

	const likeImage = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (authStore.isAuth) {
			e.stopPropagation()
			like(image._id)
		}
	}

	return (
		<div className={styles.outer} onClick={onClick}>
			<img src={getImage(image.src)} alt="" />
			<div className={styles.background}>
				<div className={cls(styles.icons, liked && styles.liked)} onClick={likeImage}>
					<FaHeart className={styles.icon} />
				</div>
			</div>
		</div>
	)
}

export default observer(Image)
