import { useMutation, useQueryClient } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { ImageService } from '@/services/imageService'

import authStore from '@/store/auth.store'
import notificationStore from '@/store/notification.store'

export const useLikes = () => {
	const queryClient = useQueryClient()

	const { mutate: like, ...props } = useMutation(['like image'], (id: string) => ImageService.like(id), {
		onSuccess: () =>
			Promise.all([
				authStore.updateMe(),
				queryClient.invalidateQueries('images', {
					refetchInactive: true,
				}),
			]),
		onError: (error: ApiError) => {
			notificationStore.error(error.response.data.message)
		},
	})
	return { like, ...props }
}
