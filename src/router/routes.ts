import { Route, RoutePaths } from '@/router/router.types'

import FeedPage from '@/pages/FeedPage'
import GalleryPage from '@/pages/GalleryPage'
import LoginPage from '@/pages/LoginPage'
import MainPage from '@/pages/MainPage'
import RegistrationPage from '@/pages/RegistrationPage'
import UploadPage from '@/pages/UploadPage'
import UserEditPage from '@/pages/UserEditPage'
import UserInfoPage from '@/pages/UserInfoPage'
import UsersPage from '@/pages/UsersPage'

export const privateRoutes: Route[] = [
	{ element: MainPage, path: RoutePaths.MAIN },
	{ element: UsersPage, path: RoutePaths.USERS },
	{ element: GalleryPage, path: RoutePaths.GALLERY },
	{ element: UserInfoPage, path: RoutePaths.USER_INFO },
	{ element: FeedPage, path: RoutePaths.FEED },
	{ element: UploadPage, path: RoutePaths.UPLOAD },
	{ element: UserEditPage, path: RoutePaths.USER_EDIT },
]

export const publicRoutes: Route[] = [
	{ element: MainPage, path: RoutePaths.MAIN },
	{ element: LoginPage, path: RoutePaths.LOGIN },
	{ element: RegistrationPage, path: RoutePaths.REGISTRATION },
	{ element: GalleryPage, path: RoutePaths.GALLERY },
]
