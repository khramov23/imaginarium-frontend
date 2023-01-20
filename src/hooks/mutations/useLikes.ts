import { useMutation, useQueryClient } from 'react-query'

import { ImageService } from '@/services/imageService'

import authStore from '@/store/auth.store'

export const useLikes = () => {
	const queryClient = useQueryClient()

	const { mutate: like } = useMutation(
		['like image'],
		(id: string) => ImageService.like(id),
		{
			onSuccess: async () => {
				await authStore.updateMe()
				await queryClient.invalidateQueries('fetch images')
			},
		}
	)
	return like
}
