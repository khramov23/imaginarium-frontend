import cls from 'classnames'
import React, { FC } from 'react'

import styles from '@/components/screens/gallery/GalleryScreen.module.scss'
import Color from '@/components/ui/Colors/Color'

import { ColorNames } from '@/types/api/image.types'

interface ColorListProps {
	colors: ColorNames[]
	setColor: (color: ColorNames) => void
	value: ColorNames | null
}

const ColorList: FC<ColorListProps> = ({ colors, value, setColor }) => {
	return (
		<div className={styles.colors}>
			{colors.map((color) => (
				<Color
					key={color}
					color={color}
					className={cls(
						styles.color,
						value === color && styles.colorActive
					)}
					onClick={() => setColor(color)}
				>
					{color}
				</Color>
			))}
		</div>
	)
}

export default ColorList
