import cls from 'classnames'
import React, { FC, useState } from 'react'

import Gallery from '@/components/ui/Gallery/Gallery'
import Users from '@/components/ui/Users/Users'

import { useFavorites } from '@/hooks/queries/useFavorites'
import { useFollowers } from '@/hooks/queries/useFollowers'
import { useOwn } from '@/hooks/queries/useOwn'
import { useSubscriptions } from '@/hooks/queries/useSubscriptions'

import styles from './Tabs.module.scss'
import { IUser } from '@/types/api/user.types'

interface TabsProps {
	user: IUser
}

const Tabs: FC<TabsProps> = ({ user }) => {
	const { data: subscriptions, refetch: refetchSubscriptions } =
		useSubscriptions(user._id)
	const { data: followers, refetch: refetchFollowers } = useFollowers(
		user._id
	)
	const { data: own, fetchNextPage: fetchNextPageOwn } = useOwn(user._id)
	const {
		data: favorites,
		hasNextPage: hasNextPageFavorites,
		fetchNextPage: fetchNextPageFavorites,
	} = useFavorites(user._id)

	const [isOwn, setIsOwn] = useState(false)
	const [isFavorites, setIsFavorites] = useState(false)
	const [isSubscriptions, setIsSubscriptions] = useState(false)
	const [isFollowers, setIsFollowers] = useState(false)

	const clear = () => {
		setIsOwn(false)
		setIsFavorites(false)
		setIsSubscriptions(false)
		setIsFollowers(false)
	}

	const fetchFollowers = async () => {
		clear()
		setIsFollowers(true)
		await refetchFollowers()
	}

	const fetchSubscriptions = async () => {
		clear()
		setIsSubscriptions(true)
		await refetchSubscriptions()
	}

	const fetchOwn = async () => {
		clear()
		setIsOwn(true)
		await fetchNextPageOwn()
	}

	const fetchFavorites = async () => {
		clear()
		setIsFavorites(true)
		await fetchNextPageFavorites()
	}

	return (
		<div className={styles.page}>
			<div className={styles.tabs}>
				<div
					className={cls(styles.tab, isOwn && styles.active)}
					onClick={fetchOwn}
				>
					own ({user.own.length})
				</div>
				<div
					className={cls(styles.tab, isFavorites && styles.active)}
					onClick={fetchFavorites}
				>
					favorites ({user.favorites.length})
				</div>
				<div
					className={cls(
						styles.tab,
						isSubscriptions && styles.active
					)}
					onClick={fetchSubscriptions}
				>
					subscriptions ({user.subscriptions.length})
				</div>
				<div
					className={cls(styles.tab, isFollowers && styles.active)}
					onClick={fetchFollowers}
				>
					followers ({user.followers.length})
				</div>
			</div>
			<div className={styles.area}>
				{isSubscriptions && subscriptions ? (
					<Users users={subscriptions} />
				) : isFollowers && followers ? (
					<Users users={followers} />
				) : isFavorites && favorites ? (
					<Gallery
						pages={favorites.pages}
						fetchNextPage={fetchNextPageFavorites}
					/>
				) : (
					isOwn &&
					own && (
						<Gallery
							pages={own.pages}
							fetchNextPage={fetchNextPageOwn}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default Tabs
