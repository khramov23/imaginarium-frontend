import React, { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
	children: ReactNode
}

const Portal: FC<PortalProps> = ({ children }) => {
	const [container] = useState(() => document.createElement('div'))

	useEffect(() => {
		document.body.appendChild(container)

		return () => {
			document.body.removeChild(container)
		}
	}, [])

	return createPortal(children, container)
}

export default Portal
