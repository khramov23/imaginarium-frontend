import React, {FC, ReactNode} from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className="container">
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout