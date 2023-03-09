import { useMutation, useQueryClient } from 'react-query'

import { ImageService } from '@/services/imageService'

import notificationStore from '@/store/notification.store'

export const useUploadImage = () => {
	const queryClient = useQueryClient()

	const { mutate: upload, ...props } = useMutation(
		'upload image',
		(formData: FormData) => ImageService.upload(formData).then((response) => response.data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('images', {
					refetchInactive: true,
				})
				notificationStore.success('Image successfully uploaded')
			},
		}
	)

	return { upload, ...props }
}
