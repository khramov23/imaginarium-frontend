import { useMutation, useQueryClient } from 'react-query'

import { ImageService } from '@/services/imageService'

import notificationStore from '@/store/notification.store'

export const useDeleteImageMutation = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteImage, ...props } = useMutation(
		['delete image'],
		(id: string) => ImageService.delete(id),
		{
			onSuccess: async () => {
				await Promise.all([
					queryClient.invalidateQueries('users', {
						refetchInactive: true,
					}),
					queryClient.invalidateQueries('images', {
						refetchInactive: true,
					}),
				])
				notificationStore.success(`Image successfully deleted`)
			},
		}
	)
	return { deleteImage, ...props }
}
