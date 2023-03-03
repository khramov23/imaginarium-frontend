import cls from 'classnames'
import { FC } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps {
	className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
	return <div className={cls(styles.loader, className)}></div>
}

export default Loader
