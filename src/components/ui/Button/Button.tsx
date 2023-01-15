import cls from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonType } from '@/types/elements/html-elements.types'

const Button: FC<ButtonType> = ({ className, children, ...props }) => {
	return (
		<button className={cls(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
