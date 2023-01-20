import { useQuery } from 'react-query'

import { UserService } from '@/services/userService'

export const useFollowers = (id: string) => {
	return useQuery(
		['get followers by user id', id],
		() => UserService.getFollowers(id).then((response) => response.data),
		{
			enabled: false,
		}
	)
}
