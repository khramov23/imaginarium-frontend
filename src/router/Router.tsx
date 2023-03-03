import { observer } from 'mobx-react-lite'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PageLoader from '@/components/screens/page-loader/PageLoader'

import { privateRoutes, publicRoutes } from '@/router/routes'

import authStore from '@/store/auth.store'

import Error404Page from '@/pages/Error404Page'

const Router = () => {
	const routes = authStore.isAuth ? privateRoutes : publicRoutes

	return (
		<BrowserRouter>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{routes.map((route) => (
						<Route element={<route.element />} path={route.path} key={route.path} />
					))}

					<Route element={<Error404Page />} path={'*'} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default observer(Router)
