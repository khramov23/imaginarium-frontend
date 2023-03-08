import cls from 'classnames'
import React, { FC } from 'react'

import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './AvatarLoader.module.scss'

type AvatarLoaderSize = 'xs' | 'sm' | 'lg' | 'xl'

interface AvatarLoaderProps {
	size?: AvatarLoaderSize
	className?: string
}

const AvatarLoader: FC<AvatarLoaderProps> = ({ className, size = 'sm' }) => {
	return <Skeleton className={cls(styles.avatar, styles[size], className)} />
}

export default AvatarLoader
