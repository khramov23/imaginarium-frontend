import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '@/components/screens/image-slider/ImageInfo/Tags/Tags.module.scss'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

import { RoutePaths } from '@/router/router.types'
import { ITag } from '@/types/api/image.types'

interface TagProps {
	tag: ITag
}

const Tag: FC<TagProps> = ({ tag }) => {
	const navigate = useNavigate()

	const onClick = () => {
		filterStore.setParam('tag')
		filterStore.setQuery(tag.value)
		modalStore.setImageSliderModal(false)
		navigate(RoutePaths.GALLERY)
	}

	return (
		<div className={styles.tag} key={tag._id} onClick={onClick}>
			{tag.value}
		</div>
	)
}

export default Tag
