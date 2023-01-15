import React from 'react'
import { useQuery } from 'react-query'

import Title from '@/components/ui/Title/Title'
import Users from '@/components/ui/Users/Users'

import { UserService } from '@/services/userService'

const UsersScreen = () => {
	const { data: users, isLoading } = useQuery('fetch all users', () =>
		UserService.fetchUsers().then((response) => response.data)
	)

	return (
		<div>
			{isLoading ? (
				<Title title="Loading..." />
			) : users?.length ? (
				<Users users={users} />
			) : (
				<Title title="Произошла непридвиденная ошибка" />
			)}
		</div>
	)
}

export default UsersScreen
