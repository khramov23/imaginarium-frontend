import { MouseEvent, useEffect, useRef, useState } from 'react'

import {
	Selection,
	UseAvatarCropperArgs,
} from '@/components/screens/user-edit/CropSquare/CropSquare.types'

export const useAvatarCropper = ({
	canvasRef,
	imgRef,
}: UseAvatarCropperArgs) => {
	const ctx = useRef<CanvasRenderingContext2D | null>(null)
	const [width, setWidth] = useState(imgRef.current!.clientWidth)
	const [height, setHeight] = useState(imgRef.current!.clientHeight)
	const [selection, setSelection] = useState<Selection>({
		mouseDown: false,
		left: 0,
		top: 0,
		size: 200,
	})

	useEffect(() => {
		if (canvasRef.current) {
			ctx.current = canvasRef.current.getContext('2d')!
		}
	}, [])

	const drawSelection = () => {
		if (ctx.current && canvasRef.current) {
			ctx.current.fillStyle = 'rgba(50, 0, 0, 0.7)'
			ctx.current.clearRect(0, 0, width, height)
			ctx.current.fillRect(0, 0, width, height)
			ctx.current.clearRect(
				selection.left,
				selection.top,
				selection.size,
				selection.size
			)
			ctx.current.beginPath()
			ctx.current.arc(
				selection.left + selection.size / 2,
				selection.top + selection.size / 2,
				selection.size / 2,
				0,
				Math.PI * 2
			)
			ctx.current.strokeStyle = '#fff'
			ctx.current.setLineDash([0])
			ctx.current.stroke()

			ctx.current.beginPath()
			ctx.current.setLineDash([10, 15])
			ctx.current.moveTo(selection.left, 0)
			ctx.current.lineTo(selection.left, height)

			ctx.current.moveTo(selection.left + selection.size, 0)
			ctx.current.lineTo(selection.left + selection.size, height)

			ctx.current.moveTo(0, selection.top)
			ctx.current.lineTo(width, selection.top)

			ctx.current.moveTo(0, selection.top + selection.size)
			ctx.current.lineTo(width, selection.top + selection.size)

			ctx.current.stroke()
		}
	}

	const updateCanvasSize = () => {
		setWidth(imgRef.current!.clientWidth)
		setHeight(imgRef.current!.clientHeight)
	}

	const onMouseDown = () => {
		setSelection({ ...selection, mouseDown: true })
	}

	const onMouseUp = () => {
		setSelection({ ...selection, mouseDown: false })
	}

	const checkLeftRight = (left: number) => {
		if (left < 0) return 0
		if (left > canvasRef.current!.width - selection.size)
			return canvasRef.current!.width - selection.size
		return left
	}

	const checkTopBottom = (top: number) => {
		if (top < 0) return 0
		if (top > canvasRef.current!.height - selection.size)
			return canvasRef.current!.height - selection.size
		return top
	}

	const onMouseMove = (e: MouseEvent) => {
		if (selection.mouseDown && canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect()
			const x = e.clientX - rect.left
			const y = e.clientY - rect.top
			setSelection({
				...selection,
				left: checkLeftRight(x - selection.size / 2),
				top: checkTopBottom(y - selection.size / 2),
			})
		}
	}

	const onSquareResize = (size: number) => {
		const delta = size - selection.size
		let left = selection.left
		let top = selection.top
		if (selection.left + size > width) left = selection.left - delta
		if (selection.top + size > height) top = selection.top - delta
		setSelection({ ...selection, size, left, top })
	}

	useEffect(() => {
		updateCanvasSize()
		drawSelection()
		window.addEventListener('resize', updateCanvasSize)

		return () => {
			window.removeEventListener('resize', updateCanvasSize)
		}
	}, [])

	useEffect(() => {
		drawSelection()
	}, [selection, width, height])

	return {
		onMouseDown,
		onMouseMove,
		onMouseUp,
		width,
		height,
		size: selection.size,
		onSquareResize,
	}
}
