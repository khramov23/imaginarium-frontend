import { makeAutoObservable } from 'mobx'

import { ColorNames } from '@/types/api/image.types'
import { optionValue } from '@/types/image-search-filter.type'

class FilterStore {
	query = ''
	param: optionValue = 'title'
	color: ColorNames | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setQuery(query: string) {
		this.query = query
	}

	setParam(param: optionValue) {
		this.param = param
	}

	setColor(color: ColorNames) {
		this.color = color
	}
}

export default new FilterStore()
