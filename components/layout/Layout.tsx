import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Footer from './Footer'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='w-full max-w-7xl mx-auto h-full'>
            <NavBar />
            {/* <HeroSection /> */}
            <div className='w-fit mx-7 overflow-x-hidden'>
                {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout
