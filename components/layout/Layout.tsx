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
        <div className='w-screen max-w-7xl mx-auto h-full bg-yellow-400'>
            <NavBar />
            {/* <HeroSection /> */}
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
