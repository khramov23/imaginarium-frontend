import cls from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { Dispatch, FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import ImageInfo from '@/components/screens/image-slider/ImageInfo/ImageInfo'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Modal from '@/components/ui/Modal/Modal'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import styles from './ImageSlider.module.scss'
import { IImage } from '@/types/api/image.types'

interface ImageSliderProps {
	pages: IImage[][]
	position: Position
	setPosition: Dispatch<React.SetStateAction<Position>>
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
	hasNextPage: boolean | undefined
}

const ImageSlider: FC<ImageSliderProps> = ({
	pages,
	position,
	setPosition,
	fetchNextPage,
}) => {
	const incrementNumber = async () => {
		if (position.number === filterStore.limit - 1) {
			if (position.page === pages.length - 1) {
				await fetchNextPage()
			}
			setPosition((prev) => ({
				number: 0,
				page: prev.page + 1,
			}))
		} else {
			setPosition((prev) => ({
				number: prev.number + 1,
				page: prev.page,
			}))
		}
	}

	const decrementNumber = () => {
		if (position.number === 0 && position.page !== 0) {
			setPosition((prev) => ({
				number: filterStore.limit - 1,
				page: prev.page - 1,
			}))
		} else if (position.number === 0 && position.page === 0) {
			setPosition({
				number: 0,
				page: 0,
			})
		} else {
			setPosition((prev) => ({
				number: prev.number - 1,
				page: prev.page,
			}))
		}
	}

	const onModalClose = () => {
		modalStore.setImageSliderModal(false)
	}

	if (!pages[position.page][position.number]) {
		runInAction(onModalClose)
		document.body.style.overflow = 'unset'
		return null
	}

	const img = pages[position.page][position.number]

	return (
		<Modal onClose={onModalClose} visible={modalStore.imageSliderModal}>
			<div
				className={styles.box}
				onClick={(event) => event.stopPropagation()}
			>
				<img
					src={`${process.env.REACT_APP_API_URL}/images/${img.src}`}
					alt={img.title}
					onClick={incrementNumber}
				/>
				<ImageInfo image={img} />
				<div
					className={cls(styles.arrow, styles.prev)}
					onClick={decrementNumber}
				>
					<FaArrowLeft />
				</div>
				<div
					className={cls(styles.arrow, styles.next)}
					onClick={incrementNumber}
				>
					<FaArrowRight />
				</div>
			</div>
		</Modal>
	)
}

export default observer(ImageSlider)
