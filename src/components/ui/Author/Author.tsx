import cls from 'classnames'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@/components/ui/Avatar/Avatar'

import styles from './Author.module.scss'
import { RoutePaths } from '@/router/router.types'
import { IUser } from '@/types/api/user.types'

interface AuthorProps {
	author: IUser
	className?: string
}

const Author: FC<AuthorProps> = ({ author, className }) => {
	return (
		<Link
			to={`${RoutePaths.USERS}/${author._id}`}
			className={cls(styles.author, className)}
		>
			<Avatar user={author} size={40} />
			<div className={styles.username}>{author.username}</div>
		</Link>
	)
}

export default Author
