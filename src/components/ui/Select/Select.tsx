import cls from 'classnames'
import React, { FC, useRef, useState } from 'react'

import { useOutsideAlerter } from '@/hooks/useOutsideAlerter'

import styles from './Select.module.scss'

interface SelectProps {
	param: string
	setParam: any
	options: string[]
	className?: string
}

const Select: FC<SelectProps> = ({ options, param, setParam, className }) => {
	const [active, setActive] = useState<boolean>(false)
	const ref = useRef(null)
	useOutsideAlerter(ref, () => setActive(false))

	const toggleActive = () => {
		setActive((prev) => !prev)
	}

	return (
		<div
			ref={ref}
			className={cls(styles.select, className)}
			onClick={toggleActive}
		>
			<div className={cls(styles.value, active && styles.activeValue)}>
				By {param}
			</div>
			<div
				className={cls(styles.options, active && styles.activeDropDown)}
			>
				{options.map((option) => (
					<div
						className={styles.option}
						onClick={() => setParam(option)}
						key={option}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	)
}

export default Select
