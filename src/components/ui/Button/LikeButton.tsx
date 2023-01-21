import React, { FC } from 'react'

import { IImage } from '@/types/api/image.types'

import Button from '@/components/ui/Button/Button'

interface LikeButtonProps {
	image: IImage
}

const LikeButton: FC<LikeButtonProps> = ({ image }) => {
	return <Button>Like {image.likes}</Button>
}

export default LikeButton
