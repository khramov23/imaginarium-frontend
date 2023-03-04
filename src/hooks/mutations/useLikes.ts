import { useMutation, useQueryClient } from 'react-query'

import { ImageService } from '@/services/imageService'

import authStore from '@/store/auth.store'

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
	})
	return { like, ...props }
}
