import cls from 'classnames'
import React, { FC } from 'react'

import styles from './Title.module.scss'
import { HeadingType } from '@/types/elements/html-elements.types'

const Title: FC<HeadingType> = ({ children, className, ...props }) => {
	return (
		<h2 className={cls(styles.title, className)} {...props}>
			{children}
		</h2>
	)
}

export default Title
