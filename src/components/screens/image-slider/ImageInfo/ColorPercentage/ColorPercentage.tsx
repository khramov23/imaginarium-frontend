import React, { FC } from 'react'

import Color from '@/components/ui/Colors/Color'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import styles from './ColorPercentage.module.scss'
import { ColorNames, IColors } from '@/types/api/image.types'

interface ColorPercentageProps {
	colors: IColors
}

const ColorPercentage: FC<ColorPercentageProps> = ({ colors }) => {
	const arr = Object.entries(colors)
	const sortedArr = arr
		.sort((a, b) => b[1] - a[1])
		.filter(([_, percentage]) => percentage > 2)

	const onClick = (color: string) => {
		filterStore.setParam('color')
		filterStore.setColor(color as ColorNames)
		modalStore.setImageSliderModal(false)
	}

	return (
		<div className={styles.box}>
			<div className={styles.title}>Colors: </div>
			<div className={styles.colors}>
				{sortedArr.map(([color, percentage]) => (
					<Color
						color={color as ColorNames}
						className={styles.color}
						onClick={() => onClick(color)}
						key={color}
					>
						{Math.floor(percentage)}%
					</Color>
				))}
			</div>
		</div>
	)
}

export default ColorPercentage
