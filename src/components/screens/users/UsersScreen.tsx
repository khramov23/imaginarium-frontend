import React, { useState } from 'react'
import { useQuery } from 'react-query'

import SearchInput from '@/components/ui/SearchInput/SearchInput'
import UserListLoader from '@/components/ui/Skeletons/UserBlockLoader/UserListLoader'
import Title from '@/components/ui/Title/Title'
import Users from '@/components/ui/Users/Users'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/userService'

import styles from './UsersScreen.module.scss'

const UsersScreen = () => {
	const [username, setUsername] = useState<string>('')
	const query = useDebounce(username, 500)

	const { data: users, isLoading } = useQuery({
		queryKey: ['fetch users', query],
		queryFn: () => UserService.fetchUsers(username).then((response) => response.data),
	})

	return (
		<div className={styles.outer}>
			<SearchInput
				placeholder="Search by username..."
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<div className={styles.users}>
				{isLoading ? (
					<UserListLoader />
				) : users?.length ? (
					<Users users={users} />
				) : (
					<Title>Unexpected error occurred!</Title>
				)}
			</div>
		</div>
	)
}

export default UsersScreen
