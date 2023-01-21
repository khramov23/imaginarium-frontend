import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import styles from './DateOutput.module.scss'

interface DateProps extends DivType {
	date: number
}

const DateOutput: FC<DateProps> = ({ date, className, ...props }) => {
	return (
		<div className={cls(styles.date, className)} {...props}>
			{new Date(date).toLocaleDateString()}
		</div>
	)
}

export default DateOutput
