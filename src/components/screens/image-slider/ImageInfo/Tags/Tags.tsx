import React, { FC } from 'react'

import Tag from '@/components/screens/image-slider/ImageInfo/Tags/Tag'

import styles from './Tags.module.scss'
import { ITag } from '@/types/api/image.types'

interface TagsProps {
	tags: ITag[]
}

const Tags: FC<TagsProps> = ({ tags }) => {
	return (
		<div className={styles.tags}>
			<div className={styles.tagsTitle}>Tags: </div>
			<div className={styles.tagList}>
				{tags.map((tag) => (
					<Tag tag={tag} key={tag._id} />
				))}
			</div>
		</div>
	)
}

export default Tags
