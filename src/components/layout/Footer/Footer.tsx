import Logo from '@/components/ui/Logo/Logo'

import styles from './Footer.module.scss'
import Social from "@/components/layout/Footer/Social";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Logo />
			<div className={styles.copyright}>Copyright by khramov 2022</div>
			<Social />
		</div>
	)
}

export default Footer