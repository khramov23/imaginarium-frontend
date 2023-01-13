import React, { FC } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	text: string
	className?: string
}

const Button: FC<ButtonProps> = ({ text, className }) => {
	return <button className={styles.button + ` ${className}`}>{text}</button>
}

export default Button
