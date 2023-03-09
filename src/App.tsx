import React, { useEffect } from 'react'

import Notification from '@/components/ui/Notification/Notification'

import Router from '@/router/Router'

import authStore from '@/store/auth.store'

function App() {
	useEffect(() => {
		document.getElementById('root')!.style.height = '100%'
		if (localStorage.getItem('imaginarium-token')) {
			authStore.checkAuth()
		}
	}, [])

	return (
		<>
			<Router />
			<Notification />
		</>
	)
}

export default App
