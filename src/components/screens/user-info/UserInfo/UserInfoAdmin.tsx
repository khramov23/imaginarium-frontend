import { FC, useState } from 'react'

import { IRole, IUser } from '@/types/api/user.types'

import Button from '@/components/ui/Button/Button'
import Select from '@/components/ui/Select/Select'

import { useChangeRoleMutation } from '@/hooks/mutations/useChangeRoleMutation'

import styles from './UserInfo.module.scss'

const roles: IRole[] = ['user', 'manager', 'admin']

interface UserInfoAdminProps {
	user: IUser
}

const UserInfoAdmin: FC<UserInfoAdminProps> = ({ user }) => {
	const { changeRole, isLoading } = useChangeRoleMutation(user.username)
	const [role, setRole] = useState<IRole>(user.role)

	const onSetRole = () => {
		changeRole({ role, id: user._id })
	}

	return (
		<div className={styles.adminSection}>
			<Select param={role} setParam={setRole} options={roles} />
			<Button loading={isLoading} onClick={onSetRole}>
				Set role
			</Button>
		</div>
	)
}

export default UserInfoAdmin
