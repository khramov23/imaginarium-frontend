import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ITag } from '@/types/api/image.types'

import styles from '@/components/screens/image-slider/ImageInfo/Tags/Tags.module.scss'

import { RoutePaths } from '@/router/router.types'

import filterStore from '@/store/filter.store'
import modalStore from '@/store/modal.store'

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
