import { useMutation, useQueryClient } from 'react-query'

import { UserService } from '@/services/userService'

import authStore from '@/store/auth.store'

export const useSubscribeMutation = () => {
	const queryClient = useQueryClient()

	const { mutate: subscribe, ...last } = useMutation(
		'subscribe on user',
		(userId: string) => UserService.subscribe(userId),
		{
			onSuccess: async () => {
				await authStore.updateMe()
				await queryClient.invalidateQueries('users')
			},
		}
	)
	return { subscribe, ...last }
}
