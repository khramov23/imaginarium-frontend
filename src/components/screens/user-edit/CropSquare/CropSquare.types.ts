import { MutableRefObject, RefObject } from 'react'

export interface Selection {
	mouseDown: boolean
	top: number
	left: number
	size: number
}

export interface UseAvatarCropperArgs {
	canvasRef: MutableRefObject<HTMLCanvasElement | null>
	imgRef: RefObject<HTMLImageElement>
	setTop: (value: number) => void
	setLeft: (value: number) => void
	setSize: (value: number) => void
}
