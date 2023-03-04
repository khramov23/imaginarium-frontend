import cls from 'classnames'
import React, { FC } from 'react'

import { ButtonType } from '@/types/elements/html-elements.types'

import Loader from '@/components/ui/Loader/Loader'

import styles from './Button.module.scss'

type ButtonTheme = 'outline' | 'fill'

interface ButtonProps extends ButtonType {
	loading?: boolean
	theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {
	const { className, children, loading, theme = 'outline', ...otherProps } = props
	return (
		<button
			className={cls(styles.button, className, styles[theme], { [styles.loading]: loading })}
			{...otherProps}
			disabled={loading}
		>
			{loading && (
				<div className={styles.loaderOuter}>
					<Loader className={styles.loader} />
				</div>
			)}
			{children}
		</button>
	)
}

export default Button
