import React, {FC, ReactNode} from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout