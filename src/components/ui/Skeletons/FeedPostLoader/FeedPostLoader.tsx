import React from 'react'

import Button from '@/components/ui/Button/Button'
import AuthorLoader from '@/components/ui/Skeletons/AuthorLoader/AuthorLoader'
import Skeleton from '@/components/ui/Skeletons/Skeleton'

import styles from './FeedPostLoader.module.scss'

const FeedPostLoader = () => {
	return (
		<div className={styles.post}>
			<AuthorLoader className={styles.author} />
			<Skeleton className={styles.date} />
			<Skeleton className={styles.image} />
			<Button className={styles.button}>Like</Button>
		</div>
	)
}

export default FeedPostLoader
