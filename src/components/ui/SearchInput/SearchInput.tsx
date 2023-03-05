import cls from 'classnames'
import React, { FC } from 'react'

import { InputType } from '@/types/elements/html-elements.types'

import styles from './SearchInput.module.scss'

const SearchInput: FC<InputType> = ({ className, ...props }) => {
	return <input className={cls(styles.input, className)} placeholder="Search..." {...props} />
}

export default SearchInput
