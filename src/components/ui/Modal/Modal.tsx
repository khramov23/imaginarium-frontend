import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import React, { FC, MouseEventHandler, ReactNode } from 'react'

import Portal from '@/components/ui/Portal/Portal'

import { useScrollBlock } from '@/hooks/useScrollBlock'

import styles from './Modal.module.scss'

interface ModalProps {
	children: ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	visible: boolean
}

const animation: MotionProps = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: {
		duration: 0.1,
	},
}

const Modal: FC<ModalProps> = ({ onClose, children, visible }) => {
	useScrollBlock(visible)

	return (
		<AnimatePresence>
			{visible && (
				<Portal>
					<motion.div className={styles.overlay} onClick={onClose} {...animation}>
						<div className={styles.content} onClick={(e) => e.stopPropagation()}>
							{children}
						</div>
					</motion.div>
				</Portal>
			)}
		</AnimatePresence>
	)
}

export default Modal
