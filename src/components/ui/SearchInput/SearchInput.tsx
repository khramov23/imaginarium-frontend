import cls from 'classnames'
import React, { FC } from 'react'

import styles from './SearchInput.module.scss'
import { InputType } from '@/types/elements/html-elements.types'

const SearchInput: FC<InputType> = ({ className, ...props }) => {
	return <input className={cls(styles.input, className)} {...props} />
}

export default SearchInput
