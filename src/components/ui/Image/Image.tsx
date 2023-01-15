import cls from 'classnames'
import React, { FC } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import authStore from '@/store/auth.store'

import styles from './Image.module.scss'
import { getImage } from '@/http/api.paths'
import { RoutePaths } from '@/router/router.types'
import { IImage } from '@/types/api/image.types'

interface ImageProps {
	image: IImage
}

const Image: FC<ImageProps> = ({ image }) => {
	const liked =
		authStore.isAuth && authStore.user.favorites.includes(image._id)

	return (
		<Link
			to={`${RoutePaths.GALLERY}/${image._id}`}
			className={styles.outer}
		>
			<img src={getImage(image.src)} alt="" />
			<div className={styles.background}>
				<div className={cls(styles.icons, liked && styles.liked)}>
					<FaHeart />
				</div>
			</div>
		</Link>
	)
}

export default Image
