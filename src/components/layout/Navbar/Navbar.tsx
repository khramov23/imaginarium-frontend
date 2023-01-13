import Logo from '@/components/ui/Logo/Logo'

import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
		</div>
	)
}

export default Navbar
