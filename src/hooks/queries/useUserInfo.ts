import { useQuery } from 'react-query'

import { UserService } from '@/services/userService'

export const useUserInfo = (userId: string) => {
	return useQuery(['users', userId], () =>
		UserService.fetchUserInfoById(userId!).then((response) => response.data)
	)
}
