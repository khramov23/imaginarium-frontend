import { observer } from 'mobx-react-lite'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import authStore from '@/store/auth.store'

const Social = () => {
	return (
		<div className="flex gap-4 items-center text-xl dark:text-white ">
			<MaterialIcon name={'MdCode'} />
			<div>{authStore.user.username}</div>
		</div>
	)
}

export default observer(Social)
