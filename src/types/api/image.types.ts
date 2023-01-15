export interface IColors {
	blue: number
	cyan: number
	re: number
	black: number
	pink: number
	green: number
	yellow: number
	white: number
}

export interface IImage {
	_id: string
	src: string
	author: string
	title: string
	width: number
	height: number
	colors: IColors
	likes: number
	tags: string[]
}
