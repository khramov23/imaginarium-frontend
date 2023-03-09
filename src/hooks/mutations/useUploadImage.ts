import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { RoutePaths } from '@/router/router.types'

import { ImageService } from '@/services/imageService'

import authStore from '@/store/auth.store'
import notificationStore from '@/store/notification.store'

export const useUploadImage = () => {
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	const { mutate: upload, ...props } = useMutation(
		'upload image',
		(formData: FormData) => ImageService.upload(formData).then((response) => response.data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('images', {
					refetchInactive: true,
				})
				notificationStore.success('Image successfully uploaded')
				navigate(`${RoutePaths.USERS}/${authStore.user._id}`)
			},
		}
	)

	return { upload, ...props }
}
