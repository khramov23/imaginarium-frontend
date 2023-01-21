import cls from 'classnames'
import React, { FC } from 'react'

import { ColorNames } from '@/types/api/image.types'
import { DivType } from '@/types/elements/html-elements.types'

import styles from './Color.module.scss'

interface ColorInterface extends DivType {
	color: ColorNames
}

const Color: FC<ColorInterface> = ({
	color,
	className,
	children,
	...props
}) => {
	return (
		<div
			className={cls(styles.color, styles[`${color}`], className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Color
