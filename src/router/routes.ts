import {Route, RoutePaths} from "@/router/router.types";
import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";

export const routes: Route[] = [
    {element: MainPage, path: RoutePaths.MAIN},
    {element: LoginPage, path: RoutePaths.LOGIN},
]