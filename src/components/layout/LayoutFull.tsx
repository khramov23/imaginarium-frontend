import React, {FC, ReactNode} from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Navbar/Navbar'

interface LayoutFullProps {
    children: ReactNode
    className?: string
}

const LayoutFull: FC<LayoutFullProps> = ({ children, className }) => {
    return (
        <div className='flex flex-col' style={{height: '100vh'}}>
            <Navbar />
            <div className={`h-full flex justify-center items-center ${className}`}>
                {children}
            </div>
            <Footer  />
        </div>
    )
}

export default LayoutFull