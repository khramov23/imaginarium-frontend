import cls from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { Dispatch, FC, useMemo, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

import { IImage } from '@/types/api/image.types'

import ImageInfo from '@/components/screens/image-slider/ImageInfo/ImageInfo'
import { Position } from '@/components/ui/Gallery/Gallery.types'
import Modal from '@/components/ui/Modal/Modal'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'

import { useMatchMedia } from '@/hooks/useMatchMedia'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import styles from './ImageSlider.module.scss'

interface ImageSliderProps {
	pages: IImage[][]
	position: Position
	setPosition: Dispatch<React.SetStateAction<Position>>
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<IImage[], unknown>>
}

const ImageSlider: FC<ImageSliderProps> = ({ pages, position, setPosition, fetchNextPage }) => {
	const { xs, sm, lg, xl, xxl } = useMatchMedia()

	const [isSidebarOpened, setIsSidebarOpened] = useState(false)

	const onSidebarToggle = () => {
		setIsSidebarOpened((prev) => !prev)
	}

	const onSidebarClose = () => {
		setIsSidebarOpened(false)
	}

	const isSidebarShown = useMemo(() => xs || sm, [xs, sm])
	const isArrowsShown = useMemo(() => lg || xl || xxl, [lg, xl, xxl])

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
		document.body.style.overflowY = 'unset'
		return null
	}

	const img = pages[position.page][position.number]

	return (
		<>
			<Modal onClose={onModalClose} visible={modalStore.imageSliderModal}>
				<div className={styles.box} onClick={() => console.log('click')}>
					<div className={styles.imgOuter}>
						<img
							src={`${process.env.REACT_APP_API_URL}/images/${img.src}`}
							alt={img.title}
							onClick={incrementNumber}
							className={styles.img}
						/>
						<div className={styles.imgOuterLeft} onClick={decrementNumber}></div>
						<div className={styles.imgOuterRight} onClick={incrementNumber}></div>
					</div>
					{!isSidebarShown && <ImageInfo image={img} />}
					{isSidebarShown && modalStore.imageSliderModal && (
						<Sidebar isOpen={isSidebarOpened} onToggle={onSidebarToggle} onClose={onSidebarClose}>
							<ImageInfo image={img} />
						</Sidebar>
					)}
					{isArrowsShown && (
						<>
							<div className={cls(styles.arrow, styles.prev)} onClick={decrementNumber}>
								<FaArrowLeft />
							</div>
							<div className={cls(styles.arrow, styles.next)} onClick={incrementNumber}>
								<FaArrowRight />
							</div>
						</>
					)}
				</div>
			</Modal>
		</>
	)
}

export default observer(ImageSlider)
