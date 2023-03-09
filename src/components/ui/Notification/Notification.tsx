import cls from 'classnames'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { Notice } from '@/types/notification.types'

import notificationStore from '@/store/notification.store'

import styles from './Notification.module.scss'

const getTimeLineAnimation = (notice: Notice): MotionProps => ({
	initial: { width: '100%' },
	animate: { width: 0 },
	transition: {
		duration: notice.duration,
		ease: 'linear',
	},
})

const noticeAnimation: MotionProps = {
	initial: {
		height: 0,
		opacity: 0,
	},
	animate: {
		height: 'auto',
		opacity: 1,
	},
	exit: {
		height: 0,
		opacity: 0,
	},
}

const Notification = () => {
	return (
		<div className={styles.notices}>
			<AnimatePresence>
				{notificationStore.notices.map((notice) => (
					<motion.div
						key={notice.id}
						className={cls(styles.notice, styles[notice.type])}
						{...noticeAnimation}
					>
						<h2 className={styles.title}>{notice.title}</h2>
						<p className={styles.text}>{notice.text}</p>
						<motion.div
							className={styles.duration}
							{...getTimeLineAnimation(notice)}
						></motion.div>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default observer(Notification)
