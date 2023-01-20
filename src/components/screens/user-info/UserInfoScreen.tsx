import React from 'react'
import { useLocation } from 'react-router-dom'

import Tabs from '@/components/screens/user-info/Tabs/Tabs'
import UserInfo from '@/components/screens/user-info/UserInfo/UserInfo'
import Title from '@/components/ui/Title/Title'

import { useUserInfo } from '@/hooks/queries/useUserInfo'

const UserInfoScreen = () => {
	const { pathname } = useLocation()
	const userId = pathname.split('/').pop()

	const { data: user, isLoading } = useUserInfo(userId!)

	if (isLoading) {
		return <Title>Loading...</Title>
	}

	return (
		<div className="container">
			{user && (
				<>
					<UserInfo user={user} />
					<Tabs user={user} />
				</>
			)}
		</div>
	)
}

export default UserInfoScreen
