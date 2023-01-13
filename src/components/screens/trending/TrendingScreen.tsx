import cls from 'classnames'
import React from 'react'

import Title from '@/components/ui/Title/Title'

import background from '@/assets/main-bg.jpg'

import styles from './Trending.module.scss'

const TrendingScreen = () => {
	return (
		<section className={styles.trending}>
			<div className="container">
				<Title
					title="Trending categories for you"
					className="text-center mb-6"
				/>
				<div className={styles.images}>
					<div className={cls(styles.left, styles.img)}>
						<img src={background} alt="" />
						<h3 className={styles.tag}>Cats</h3>
					</div>
					<div className={cls(styles.right)}>
						<div className={cls(styles.rightTop, styles.img)}>
							<img src={background} alt="" />
							<h3 className={styles.tag}>Man</h3>
						</div>
						<div className={styles.rightBottom}>
							<div
								className={cls(
									styles.rightBottomLeft,
									styles.img
								)}
							>
								<img src={background} alt="" />
								<h3 className={styles.tag}>Woman</h3>
							</div>
							<div
								className={cls(
									styles.rightBottomRight,
									styles.img
								)}
							>
								<img src={background} alt="" />
								<h3 className={styles.tag}>Colors</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrendingScreen
