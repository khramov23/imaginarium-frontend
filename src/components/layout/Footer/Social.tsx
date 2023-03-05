import { observer } from 'mobx-react-lite'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import authStore from '@/store/auth.store'

import styles from './Footer.module.scss'

const Social = () => {
	return (
		<div className={styles.social}>
			<MaterialIcon name={'MdCode'} />
			<div>{authStore.user.username}</div>
		</div>
	)
}

export default observer(Social)
