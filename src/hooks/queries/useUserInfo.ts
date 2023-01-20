import { useQuery } from 'react-query'

import { UserService } from '@/services/userService'

export const useUserInfo = (userId: string) => {
	return useQuery(['fetch user info by id', userId], () =>
		UserService.fetchUserInfoById(userId!).then((response) => response.data)
	)
}
