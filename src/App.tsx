import React, {useEffect} from 'react'
import Router from "@/router/Router";
import authStore from "@/store/auth.store";

function App() {
	useEffect(() => {
		if (localStorage.getItem('imaginarium-token')) {
			authStore.checkAuth()
		}
	}, [])

	return <Router />
}

export default App
