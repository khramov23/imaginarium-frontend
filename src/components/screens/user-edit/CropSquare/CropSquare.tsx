import React, { FC, useRef } from 'react'

import { useAvatarCropper } from '@/components/screens/user-edit/CropSquare/useAvatarCropper'

import styles from './CropSquare.module.scss'

interface CropSquareProps {
	file: File
	aspect: number
	imgRef: React.RefObject<HTMLImageElement>
}

const CropSquare: FC<CropSquareProps> = ({ imgRef }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const {
		width,
		height,
		onMouseUp,
		onMouseDown,
		onMouseMove,
		size,
		onSquareResize,
	} = useAvatarCropper({ canvasRef, imgRef })

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
