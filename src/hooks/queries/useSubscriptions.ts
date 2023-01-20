import { useQuery } from 'react-query'

import { UserService } from '@/services/userService'

export const useSubscriptions = (id: string) => {
	return useQuery(
		['get subscriptions by user id', id],
		() =>
			UserService.getSubscriptions(id).then((response) => response.data),
		{
			enabled: false,
		}
	)
}
