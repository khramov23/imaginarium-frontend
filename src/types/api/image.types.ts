export enum ColorNames {
	RED = 'red',
	BLUE = 'blue',
	CYAN = 'cyan',
	BLACK = 'black',
	PINK = 'pink',
	GREEN = 'green',
	YELLOW = 'yellow',
	WHITE = 'white',
}

export interface IColors {
	blue: number
	cyan: number
	red: number
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
