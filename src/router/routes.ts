import LoginPage from '@/pages/LoginPage'
import MainPage from '@/pages/MainPage'
import RegistrationPage from '@/pages/RegistrationPage'
import { Route, RoutePaths } from '@/router/router.types'


export const routes: Route[] = [
    {element: MainPage, path: RoutePaths.MAIN},
    {element: LoginPage, path: RoutePaths.LOGIN},
    {element: RegistrationPage, path: RoutePaths.REGISTRATION}
]