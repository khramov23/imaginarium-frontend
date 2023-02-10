import React from 'react'

import Feed from '@/components/screens/feed/Feed'
import FeedPostLoader from '@/components/ui/Skeletons/FeedPostLoader/FeedPostLoader'

import { useFeed } from '@/hooks/queries/useFeed'

const FeedScreen = () => {
	const { data: infData, isLoading, fetchNextPage } = useFeed()

	return (
		<div className="container">
			{isLoading ? (
				<>
					<FeedPostLoader />
					<FeedPostLoader />
				</>
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
