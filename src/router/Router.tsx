import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from '@/router/routes'
import Error404Page from "@/pages/404/Error404Page";


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route =>
					<Route element={<route.element />} path={route.path} />
				)}
				<Route element={<Error404Page />} path={'*'}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router