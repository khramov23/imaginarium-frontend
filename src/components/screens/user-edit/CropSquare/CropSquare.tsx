import React, { FC, useRef } from 'react'

import { useAvatarCropper } from '@/components/screens/user-edit/CropSquare/useAvatarCropper'

import styles from './CropSquare.module.scss'

interface CropSquareProps {
	imgRef: React.RefObject<HTMLImageElement>
	setTop: (value: number) => void
	setLeft: (value: number) => void
	setSize: (value: number) => void
}

const CropSquare: FC<CropSquareProps> = ({ imgRef, setTop, setLeft, setSize }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const { width, height, onMouseUp, onMouseDown, onMouseMove, size, onSquareResize, onTouch } =
		useAvatarCropper({
			canvasRef,
			imgRef,
			setTop,
			setLeft,
			setSize,
		})

	return (
		<>
			<canvas
				className={styles.canvas}
				ref={canvasRef}
				width={width}
				height={height}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
				onMouseMove={onMouseMove}
				onTouchStart={onMouseDown}
				onTouchEnd={onMouseDown}
				onTouchMove={onTouch}
			></canvas>

			<input
				type="range"
				min={100}
				className={styles.range}
				max={Math.min(width, height)}
				value={size}
				onChange={(e) => onSquareResize(+e.target.value)}
			/>
		</>
	)
}

export default CropSquare
