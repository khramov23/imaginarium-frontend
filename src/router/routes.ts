import GalleryPage from '@/pages/GalleryPage'
import LoginPage from '@/pages/LoginPage'
import MainPage from '@/pages/MainPage'
import RegistrationPage from '@/pages/RegistrationPage'
import UsersPage from '@/pages/UsersPage'
import { Route, RoutePaths } from '@/router/router.types'

export const routes: Route[] = [
	{ element: MainPage, path: RoutePaths.MAIN },
	{ element: LoginPage, path: RoutePaths.LOGIN },
	{ element: RegistrationPage, path: RoutePaths.REGISTRATION },
	{ element: UsersPage, path: RoutePaths.USERS },
	{ element: GalleryPage, path: RoutePaths.GALLERY },
]
