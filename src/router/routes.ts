import {Route, RoutePaths} from "@/router/router.types";
import MainPage from "@/pages/MainPage";

export const routes: Route[] = [
    {element: MainPage, path: RoutePaths.MAIN},
]