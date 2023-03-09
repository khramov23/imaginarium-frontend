export type NoticeType = 'success' | 'warning' | 'error'

export interface Notice {
	id?: number
	title?: string
	text: string
	type: NoticeType
	duration?: number
}
