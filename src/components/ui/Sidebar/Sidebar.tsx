import cls from 'classnames'
import React, { FC, MouseEventHandler, ReactNode } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { useScrollBlock } from '@/hooks/useScrollBlock'

import styles from './Sidebar.module.scss'

type Mode = 'bottom' | 'right'

interface SidebarProps {
	children: ReactNode
	onToggle: MouseEventHandler<HTMLDivElement>
	onClose: MouseEventHandler<HTMLDivElement>
	isOpen: boolean
	widthArrow?: boolean
	mode?: Mode
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { isOpen, onClose, onToggle, children, mode = 'bottom', widthArrow = true } = props
	useScrollBlock(isOpen)

	return (
		<>
			<div className={cls(styles.overlay, { [styles.shadow]: isOpen })} onClick={onClose}></div>
			<div
				className={cls(styles.content, styles[mode], { [styles.opened]: isOpen })}
				onClick={(e) => e.stopPropagation()}
			>
				{widthArrow && (
					<div className={styles.toggle} onClick={onToggle}>
						{isOpen ? (
							<MaterialIcon name={'MdOutlineKeyboardArrowDown'} />
						) : (
							<MaterialIcon name={'MdOutlineKeyboardArrowUp'} />
						)}
					</div>
				)}
				{children}
			</div>
		</>
	)
}
