import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import styles from './Footer.module.scss'

const Social = () => {
	return (
		<div className={styles.social}>
			<MaterialIcon name={'MdCode'} />
			<a target="_blank" href="https://github.com/khramov23/imaginarium-frontend">
				khramov23
			</a>
		</div>
	)
}

export default Social
