import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import { IUser } from '@/types/api/user.types'

import { getAvatar } from '@/http/api.paths'

import styles from './Avatar.module.scss'

type AvatarSize = 'xs' | 'sm' | 'lg' | 'xl'

interface AvatarProps {
	user: IUser
	size?: AvatarSize
	className?: string
}

const Avatar: FC<AvatarProps> = ({ size = 'sm', className, user }) => {
	return (
		<div
			className={cls(className, styles.box, styles[size], {
				[styles.noAvatar]: !!user.avatar,
			})}
		>
			{user.avatar ? (
				<img src={getAvatar(user.avatar)} alt="" />
			) : (
				user.username.charAt(0).toUpperCase()
			)}
		</div>
	)
}

export default observer(Avatar)
