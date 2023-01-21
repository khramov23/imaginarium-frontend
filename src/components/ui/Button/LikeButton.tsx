import React, { FC } from 'react'

import Button from '@/components/ui/Button/Button'

import { IImage } from '@/types/api/image.types'

interface LikeButtonProps {
	image: IImage
}

const LikeButton: FC<LikeButtonProps> = ({ image }) => {
	return <Button>Like {image.likes}</Button>
}

export default LikeButton
