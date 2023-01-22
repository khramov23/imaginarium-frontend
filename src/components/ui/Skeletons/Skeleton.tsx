import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import styles from './Skeleton.module.scss'

interface SkeletonProps extends DivType {
	rowsCount?: number
	outerClassname?: string
}

const makeArr = (count: number) => {
	let arr: number[] = []
	for (let i = 0; i < count; i++) arr.push(i)
	return arr
}

const Skeleton: FC<SkeletonProps> = ({
	rowsCount = 1,
	outerClassname,
	className,
	...props
}) => {
	const rows = makeArr(rowsCount)

	return rowsCount > 1 ? (
		<div className={outerClassname} {...props}>
			{rows.map(() => (
				<div className={cls(styles.skeleton, className)}></div>
			))}
		</div>
	) : (
		<div className={cls(styles.skeleton, className)} {...props}></div>
	)
}

export default Skeleton
