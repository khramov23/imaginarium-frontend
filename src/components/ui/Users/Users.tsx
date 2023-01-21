import React, { FC } from 'react'

import { IUser } from '@/types/api/user.types'

import User from '@/components/ui/User/User'

import styles from './Users.module.scss'

interface UsersProps {
	users: IUser[]
}

const Users: FC<UsersProps> = ({ users }) => {
	return (
		<div className={styles.users}>
			{users.map((user) => (
				<User user={user} key={user._id} />
			))}
		</div>
	)
}

export default Users
