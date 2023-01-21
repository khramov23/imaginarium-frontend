import React from 'react'

import Feed from '@/components/screens/feed/Feed'
import Title from '@/components/ui/Title/Title'

import { useFeed } from '@/hooks/queries/useFeed'

const FeedScreen = () => {
	const { data: infData, isLoading, fetchNextPage } = useFeed()

	return (
		<div className="container">
			{isLoading ? (
				<Title>Loading...</Title>
			) : (
				infData && (
					<>
						<Feed
							pages={infData.pages}
							fetchNextPage={fetchNextPage}
						/>
					</>
				)
			)}
		</div>
	)
}

export default FeedScreen
