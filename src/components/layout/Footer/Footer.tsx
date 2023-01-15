import cls from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import Social from '@/components/layout/Footer/Social'
import Logo from '@/components/ui/Logo/Logo'

import styles from './Footer.module.scss'

interface FooterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...rest }) => {
	return (
		<div className={cls(styles.footer, className)} {...rest}>
			<div style={{ width: 150 }}>
				<Logo />
			</div>

			<div className={styles.copyright}>Copyright by khramov 2022</div>
			<Social />
		</div>
	)
}

export default Footer
