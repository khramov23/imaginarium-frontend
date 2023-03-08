import React, { FC, MouseEventHandler, ReactNode } from 'react'

import Portal from '@/components/ui/Portal/Portal'

import { useScrollBlock } from '@/hooks/useScrollBlock'

import styles from './Modal.module.scss'

interface ModalProps {
	children: ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	visible: boolean
}

const Modal: FC<ModalProps> = ({ onClose, children, visible }) => {
	useScrollBlock(visible)

	if (!visible) {
		return null
	}

	return (
		<Portal>
			<div className={styles.overlay} onClick={onClose}>
				<div className={styles.content} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</Portal>
	)
}

export default Modal
