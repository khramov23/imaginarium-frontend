import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { Dispatch, FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import ImageInfo from '@/components/screens/image-slider/ImageInfo/ImageInfo'
import Modal from '@/components/ui/Modal/Modal'

import modalStore from '@/store/modal.store'

import styles from './ImageSlider.module.scss'
import { IImage } from '@/types/api/image.types'

interface ImageSliderProps {
	images: IImage[]
	number: number
	setNumber: Dispatch<React.SetStateAction<number>>
}

const ImageSlider: FC<ImageSliderProps> = ({ images, number, setNumber }) => {
	const incrementNumber = () => {
		if (number === images.length - 1) setNumber(0)
		else setNumber((prev) => ++prev)
	}

	const decrementNumber = () => {
		if (number === 0) setNumber(images.length - 1)
		else setNumber((prev) => --prev)
	}

	const onModalClose = () => {
		modalStore.setImageSliderModal(false)
	}

	return (
		<Modal onClose={onModalClose} visible={modalStore.imageSliderModal}>
			<div
				className={styles.box}
				onClick={(event) => event.stopPropagation()}
			>
				<img
					src={`${process.env.REACT_APP_API_URL}/images/${images[number].src}`}
					alt={images[number].title}
					onClick={incrementNumber}
				/>
				<ImageInfo image={images[number]} />
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
