import { useEffect } from 'react'

export const useScrollBlock = (visible: boolean) => {
	useEffect(() => {
		document.body.style.overflowY = visible ? 'hidden' : 'unset'
	}, [visible])
}
