import { useQuery } from 'react-query'

import { UserService } from '@/services/userService'

export const useFollowers = (id: string) => {
	return useQuery(
		['users', 'followers', id],
		() => UserService.getFollowers(id).then((response) => response.data),
		{
			enabled: false,
		}
	)
}
