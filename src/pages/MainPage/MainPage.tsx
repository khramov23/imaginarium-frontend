import React from 'react'

import Layout from '@/components/layout/Layout'
import MainScreen from '@/components/screens/main/MainScreen'
import TrendingScreen from '@/components/screens/trending/TrendingScreen'

const MainPage = () => {
	return (
		<Layout>
			<MainScreen />
			<TrendingScreen />
		</Layout>
	)
}

export default MainPage
