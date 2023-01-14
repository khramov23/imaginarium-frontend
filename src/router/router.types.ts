
export enum RoutePaths {
    MAIN = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    USERS = '/users',
    FEED = 'feed',
    GALLERY = '/gallery',
    UPLOAD = '/upload',
}

export type RoutePath = Record<RoutePaths, string>

export interface Route {
    element: Function,
    path: RoutePaths
}