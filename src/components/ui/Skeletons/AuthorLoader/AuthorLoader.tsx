import cls from 'classnames'
import React, { FC } from 'react'

import { DivType } from '@/types/elements/html-elements.types'

import AvatarLoader from '@/components/ui/Skeletons/AvatarLoader/AvatarLoader'
import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './AuthorLoader.module.scss'

const AuthorLoader: FC<DivType> = ({ className, ...props }) => {
	return (
		<div className={cls(styles.author, className)} {...props}>
			<AvatarLoader className={styles.avatar} size={'xs'} />
			<Skeleton className={styles.username} />
		</div>
	)
}

export default AuthorLoader
