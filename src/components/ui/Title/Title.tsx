import cls from 'classnames'
import React, { FC } from 'react'

import { HeadingType } from '@/types/elements/html-elements.types'

import styles from './Title.module.scss'

const Title: FC<HeadingType> = ({ children, className, ...props }) => {
	return (
		<h2 className={cls(styles.title, className)} {...props}>
			{children}
		</h2>
	)
}

export default Title
