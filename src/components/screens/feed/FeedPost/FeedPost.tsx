import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { Dispatch, FC } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import Author from '@/components/ui/Author/Author'
import Button from '@/components/ui/Button/Button'
import DateOutput from '@/components/ui/Date/DateOutput'
import { Position } from '@/components/ui/Gallery/Gallery.types'

import { useLikes } from '@/hooks/mutations/useLikes'
import { useUserInfo } from '@/hooks/queries/useUserInfo'

import authStore from '@/store/auth.store'
import modalStore from '@/store/modal.store'

import styles from './FeedPost.module.scss'
import { getImage } from '@/http/api.paths'
import { IImage } from '@/types/api/image.types'

interface FeedPostProps {
	image: IImage
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
	setPosition: Dispatch<React.SetStateAction<Position>>
	pageIndex: number
	numberIndex: number
}

const FeedPost: FC<FeedPostProps> = ({
	image,
	setPosition,
	pageIndex,
	numberIndex,
}) => {
	const { data: user } = useUserInfo(image.author)
	const { like } = useLikes()

	const liked =
		authStore.isAuth && authStore.user.favorites.includes(image._id)

	const onImageOpen = () => {
		modalStore.setImageSliderModal(true)
	}

	return (
		<div className={styles.post}>
			{user && <Author author={user} className={styles.author} />}
			<DateOutput date={image.date} className={styles.date} />
			<div
				className={styles.img}
				onClick={() => {
					onImageOpen()
					setPosition({
						page: pageIndex,
						number: numberIndex,
					})
				}}
			>
				<img src={getImage(image.src)} alt="" />
			</div>
			<div className={styles.buttons}>
				<Button
					onClick={() => like(image._id)}
					className={cls(liked && styles.active)}
				>
					Like {image.likes}
				</Button>
			</div>
		</div>
	)
}

export default observer(FeedPost)
