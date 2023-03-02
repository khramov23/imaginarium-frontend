import cls from 'classnames'
import React, { FC } from 'react'

import { ButtonType } from '@/types/elements/html-elements.types'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonType {
	loading?: boolean
}

const Button: FC<ButtonProps> = ({
	className,
	children,
	loading,
	...props
}) => {
	return (
		<button
			className={cls(styles.button, className, {
				[styles.loading]: loading,
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
