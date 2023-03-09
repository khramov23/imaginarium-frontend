import { makeAutoObservable } from 'mobx'

import { Notice } from '@/types/notification.types'

class NotificationStore {
	notices: Notice[] = []

	constructor() {
		makeAutoObservable(this)
	}

	notice(notice: Notice) {
		const correctNotice = { ...notice, duration: notice.duration || 3, id: Date.now() }
		this.addNotice(correctNotice)
		setTimeout(() => {
			this.removeLastNotice()
		}, correctNotice.duration * 1000)
	}

	private addNotice(notice: Notice) {
		this.notices.push(notice)
	}

	private removeLastNotice() {
		this.notices.shift()
	}

	success(text: string, title?: string, duration?: number) {
		this.notice({ text, title, type: 'success', duration })
	}

	error(text: string, title?: string, duration?: number) {
		this.notice({ text, title, type: 'error', duration })
	}

	warning(text: string, title?: string, duration?: number) {
		this.notice({ text, title, type: 'warning', duration })
	}
}

export default new NotificationStore()
