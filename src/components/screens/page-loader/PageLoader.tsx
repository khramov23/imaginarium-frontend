import React from 'react'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader/Loader'

import styles from './PageLoader.module.scss'

const PageLoader = () => {
	return (
		<Layout className={styles.pageLoader}>
			<Loader big />
		</Layout>
	)
}

export default PageLoader
