import React, { useEffect } from 'react'

import authStore from '@/store/auth.store'

import Router from '@/router/Router'

function App() {
	useEffect(() => {
		document.getElementById('root')!.style.height = '100%'
		if (localStorage.getItem('imaginarium-token')) {
			authStore.checkAuth()
		}
	}, [])

	return <Router />
}

export default App
