import Layout from '@/components/layout/Layout'
import React from 'react'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='min-w-screen  max-w-6xl mx-auto'>
            <Layout>{children}</Layout>
        </div>
    )
}
