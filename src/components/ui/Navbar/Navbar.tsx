
import styles from './Navbar.module.scss'
import Logo from "@/components/ui/Logo/Logo";


const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
		</div>
	)
}

export default Navbar
