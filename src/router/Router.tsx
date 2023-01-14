import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'

import { routes } from '@/router/routes'
import Error404Page from "@/pages/Error404Page";


const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{routes.map(route =>
						<Route element={<route.element />} path={route.path} key={route.path} />
					)}
					<Route element={<Error404Page />} path={'*'}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default Router