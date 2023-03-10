import { makeAutoObservable } from 'mobx'

import { ThemeType } from '@/types/theme.types'

class ThemeStore {
	theme: ThemeType =
		(localStorage.getItem('imaginarium-theme') as ThemeType) || 'dark'

	constructor() {
		makeAutoObservable(this)
		if (localStorage.getItem('imaginarium-theme') === 'dark') {
			document.documentElement.classList.add('dark')
		}
	}

	setTheme(theme: ThemeType) {
		this.theme = theme
		localStorage.setItem('imaginarium-theme', theme)
		if (localStorage.getItem('imaginarium-theme') === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	toggleTheme() {
		const nextTheme = this.theme === 'light' ? 'dark' : 'light'
		this.setTheme(nextTheme)
	}
}

export default new ThemeStore()
