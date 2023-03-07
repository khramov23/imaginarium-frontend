import cls from 'classnames'
import { FC } from 'react'

import styles from './Burger.module.scss'

interface BurgerProps {
	className?: string
	isActive?: boolean
	onToggle?: () => void
}

const Burger: FC<BurgerProps> = ({ className, isActive, onToggle }) => {
	return (
		<div className={cls(styles.burger, className, { [styles.active]: isActive })} onClick={onToggle}>
			<div className={cls(styles.layer, styles.top)}></div>
			<div className={cls(styles.layer, styles.center)}></div>
			<div className={cls(styles.layer, styles.bottom)}></div>
		</div>
	)
}

export default Burger
