import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import dummyImg from '@/assets/images/dummy-img.jpg'

const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Our Services', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Condition', href: '#' },
]

const galleryImages = [dummyImg, dummyImg, dummyImg, dummyImg]

const socialIcons = [
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
]

const Footer = () => {
    return (
        <footer className='bg-primary text-white pt-10 pb-6 px-4 md:px-16 max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10'>
                {/* Contact */}
                <div>
                    <h3 className='text-[24px] lg:text-[28px] font-bold mb-4'>Get In Touch</h3>
                    <p className='mb-2 font-normal'>📍 123 Street, New York, USA</p>
                    <p className='mb-2'>📞 +012 345 67890</p>
                    <p className='mb-4'>✉️ info@example.com</p>
                    <div className='flex space-x-4'>
                        {socialIcons.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className='w-9 h-9 rounded-full flex items-center justify-center bg-white text-teal-900 hover:bg-orange-500 hover:text-white transition'>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className='text-[24px] lg:text-[28px] font-bold mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className='hover:underline hover:text-orange-400 transition'>
                                    ➤ {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Photo Gallery */}
                <div>
                    <h3 className='text-[24px] lg:text-[28px] font-bold mb-4'>
                        Photo Gallery
                    </h3>
                    <div className='grid grid-cols-3 gap-2'>
                        {galleryImages.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Gallery ${index}`}
                                width={80}
                                height={80}
                                className='border-4 border-white rounded-lg object-cover w-[88px] h-[88px] max-w-[88px] max-h-[88px]'
                            />
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className='text-[24px] lg:text-[28px] font-bold mb-4'>Newsletter</h3>
                    <p className='text-gray-300 mb-4'>
                        Dolor amet sit justo amet elitr clita ipsum elitr est.
                    </p>
                    <div className='flex items-center rounded-md border border-white overflow-hidden'>
                        <input
                            type='email'
                            placeholder='Your email'
                            className='p-2 flex-1 text-black outline-none'
                        />
                        <button className='bg-orange-500 text-white px-4 py-2 hover:bg-orange-600'>
                            SignUp
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className='border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300'>
                <p>
                    © <span className='underline'>Your Site Name</span>, All
                    Right Reserved. Designed By{' '}
                    <a href='#' className='underline text-white'>
                        HTML Codex
                    </a>
                </p>
                <div className='flex space-x-4 mt-2 md:mt-0'>
                    <a href='#' className='hover:underline'>
                        Home
                    </a>
                    <a href='#' className='hover:underline'>
                        Cookies
                    </a>
                    <a href='#' className='hover:underline'>
                        Help
                    </a>
                    <a href='#' className='hover:underline'>
                        FAQs
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
