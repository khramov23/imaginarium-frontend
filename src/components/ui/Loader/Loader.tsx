import cls from 'classnames'
import { FC } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps {
	className?: string
	big?: boolean
}

const Loader: FC<LoaderProps> = ({ className, big }) => {
	return <div className={cls(styles.loader, className, { [styles.big]: big })}></div>
}

export default Loader
