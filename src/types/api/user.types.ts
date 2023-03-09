export type IRole = 'user' | 'manager' | 'admin'

export interface IUser {
	_id: string
	username: string
	email: string
	isActivated: string
	role: IRole
	followers: string[]
	subscriptions: string[]
	favorites: string[]
	own: string[]
	avatar: string
}
