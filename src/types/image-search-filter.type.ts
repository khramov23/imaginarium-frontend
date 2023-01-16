import { ColorNames } from '@/types/api/image.types'

export interface ImageSearchFilter {
	param: optionValue
	query: string
	color: ColorNames | null
}

export type optionValue = 'title' | 'color' | 'tag'
