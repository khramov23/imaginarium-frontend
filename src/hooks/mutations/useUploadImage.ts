import { useMutation, useQueryClient } from 'react-query'

import { ImageService } from '@/services/imageService'

export const useUploadImage = () => {
	const queryClient = useQueryClient()

	const { mutate: upload, ...props } = useMutation(
		'upload image',
		(formData: FormData) =>
			ImageService.upload(formData).then((response) => response.data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('images')
			},
		}
	)

	return { upload, ...props }
}
