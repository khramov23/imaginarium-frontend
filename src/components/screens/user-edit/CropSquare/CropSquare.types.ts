import { MutableRefObject, RefObject } from 'react'

export interface Margins {
	top: number
	left: number
	bottom: number
	right: number
}

export interface Selection {
	mouseDown: boolean
	top: number
	left: number
	size: number
}

export interface UseAvatarCropperArgs {
	canvasRef: MutableRefObject<HTMLCanvasElement | null>
	imgRef: RefObject<HTMLImageElement>
}
