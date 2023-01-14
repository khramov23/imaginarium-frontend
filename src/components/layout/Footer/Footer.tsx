import Social from '@/components/layout/Footer/Social'
import Logo from '@/components/ui/Logo/Logo'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div style={{ width: 150 }}>
				<Logo />
			</div>

			<div className={styles.copyright}>Copyright by khramov 2022</div>
			<Social />
		</div>
	)
}

export default Footer
