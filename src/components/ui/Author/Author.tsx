import cls from 'classnames'
import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { IUser } from '@/types/api/user.types'

import Avatar from '@/components/ui/Avatar/Avatar'

import { RoutePaths } from '@/router/router.types'

import styles from './Author.module.scss'

interface AuthorProps extends Partial<LinkProps> {
	author: IUser
}

const Author: FC<AuthorProps> = ({ author, className, ...props }) => {
	return (
		<Link to={`${RoutePaths.USERS}/${author._id}`} className={cls(styles.author, className)} {...props}>
			<Avatar size="xs" user={author} />
			<div className={styles.username}>{author.username}</div>
		</Link>
	)
}

export default Author
