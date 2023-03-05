import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import styles from './Alert.module.scss'

type AlertType = 'error'

interface AlertProps extends DivType {
	text: string
	type?: AlertType
	small?: boolean
}

const Alert: FC<AlertProps> = (props) => {
	const { text, className, type = 'error', small = false, ...otherProps } = props

	return (
		<div className={cls(styles.alert, className, { [styles.small]: small })} {...otherProps}>
			{text}
		</div>
	)
}

export default Alert
