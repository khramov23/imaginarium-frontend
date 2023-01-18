import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC, MouseEventHandler } from 'react'
import { FaHeart } from 'react-icons/fa'

import authStore from '@/store/auth.store'

import styles from './Image.module.scss'
import { getImage } from '@/http/api.paths'
import { IImage } from '@/types/api/image.types'

interface ImageProps {
	image: IImage
	onClick: MouseEventHandler<HTMLDivElement>
}

const Image: FC<ImageProps> = ({ image, onClick }) => {
	const liked =
		authStore.isAuth && authStore.user.favorites.includes(image._id)

	return (
		<div className={styles.outer} onClick={onClick}>
			<img src={getImage(image.src)} alt="" />
			<div className={styles.background}>
				<div className={cls(styles.icons, liked && styles.liked)}>
					<FaHeart />
				</div>
			</div>
		</div>
	)
}

export default observer(Image)
