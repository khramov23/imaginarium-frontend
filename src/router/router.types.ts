export enum RoutePaths {
	MAIN = '/',
	LOGIN = '/login',
	REGISTRATION = '/registration',
	USERS = '/users',
	FEED = '/feed',
	GALLERY = '/gallery',
	UPLOAD = '/upload',
	USER_INFO = '/users/:id',
}

export interface Route {
	element: Function
	path: RoutePaths
}
