import cls from 'classnames'
import React, { forwardRef } from 'react'

import { InputType } from '@/types/elements/html-elements.types'

import styles from './FormInput.module.scss'

const FormInput = forwardRef<HTMLInputElement, InputType>((props, ref) => {
	return <input ref={ref} {...props} className={cls(styles.formInput, props.className)} />
})

export default FormInput
