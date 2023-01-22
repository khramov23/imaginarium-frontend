import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import styles from './Alert.module.scss'

interface AlertProps extends DivType {
	text: string
}

const Alert: FC<AlertProps> = ({ text, className, ...props }) => {
	return (
		<div className={cls(styles.alert, className)} {...props}>
			{text}
		</div>
	)
}

export default Alert
