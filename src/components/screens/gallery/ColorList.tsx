import React, { FC } from 'react'

import { ColorNames } from '@/types/api/image.types'

import styles from '@/components/screens/gallery/GalleryScreen.module.scss'
import Color from '@/components/ui/Colors/Color'

interface ColorListProps {
	colors: ColorNames[]
	setColor: (color: ColorNames) => void
	text?: string
}

const ColorList: FC<ColorListProps> = ({ colors, setColor }) => {
	return (
		<div className={styles.colors}>
			{colors.map((color) => (
				<Color key={color} color={color} className={styles.color} onClick={() => setColor(color)}>
					{color}
				</Color>
			))}
		</div>
	)
}

export default ColorList
