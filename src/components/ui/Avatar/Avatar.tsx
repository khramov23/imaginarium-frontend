import cls from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import { IUser } from '@/types/api/user.types'

import { getAvatar } from '@/http/api.paths'

import styles from './Avatar.module.scss'

interface AvatarProps {
	user: IUser
	size?: number
	className?: string
}

const Avatar: FC<AvatarProps> = ({ size = 50, className, user }) => {
	return (
		<div
			className={cls({
				[styles.box]: true,
				className,
				[styles.noAvatar]: !!user.avatar,
			})}
			style={{ width: size, height: size }}
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
