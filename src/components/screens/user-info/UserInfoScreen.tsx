import React from 'react'
import { useLocation } from 'react-router-dom'

import Tabs from '@/components/screens/user-info/Tabs/Tabs'
import UserInfo from '@/components/screens/user-info/UserInfo/UserInfo'
import UserInfoLoader from '@/components/ui/Skeletons/UserInfoLoader/UserInfoLoader'

import { useUserInfo } from '@/hooks/queries/useUserInfo'

const UserInfoScreen = () => {
	const { pathname } = useLocation()
	const userId = pathname.split('/').pop()

	const { data: user, isLoading } = useUserInfo(userId!)

	return (
		<div className="container">
			{isLoading ? (
				<UserInfoLoader />
			) : (
				user && (
					<>
						<UserInfo user={user} />
						<Tabs user={user} />
					</>
				)
			)}
		</div>
	)
}

export default UserInfoScreen
