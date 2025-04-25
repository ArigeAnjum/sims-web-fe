import React from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,ArrowRightIcon } from '@heroicons/react/24/outline'
import Button from '@/ui/Button'


const NavBar = () => {
    const navLinks = [
        { label: 'Home', href: '#', active: true },
        { label: 'About', href: '#' },
        { label: 'Academic', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'Career', href: '#' },
    ]
    return (
        <div>
            <Disclosure as='nav' className='bg-white  shadow-sm'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-[84px] justify-between items-center'>
                        <div className='flex w-full'>
                            <div className='flex shrink-0 items-center'>
                                <img
                                    alt='Your Company'
                                    src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                                    className='h-8 w-auto'
                                />
                            </div>
                            <div className='hidden lg:ml-6 lg:flex lg:space-x-10  justify-center w-full'>
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                {navLinks.map((ele) => (
                                    <a
                                    key={ele.label}
                                        href={ele.href}
                                        className={`inline-flex items-center  ${ele.active ? 'text-primary':'text-dark'} px-1 pt-1 text-[16px] font-medium `}>
                                        {ele.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='hidden lg:ml-6 lg:flex lg:items-center'>
                            <Button>Join Us <ArrowRightIcon className='w-5 h-5 ml-2'/></Button>
                        </div>
                        <div className='-mr-2 flex items-center lg:hidden'>
                            {/* Mobile menu button */}
                            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset'>
                                <span className='absolute -inset-0.5' />
                                <span className='sr-only'>Open main menu</span>
                                <Bars3Icon
                                    aria-hidden='true'
                                    className='block size-6 group-data-open:hidden'
                                />
                                <XMarkIcon
                                    aria-hidden='true'
                                    className='hidden size-6 group-data-open:block'
                                />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className='md:hidden'>
                    <div className='space-y-1 pt-2 pb-3'>
                        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                        <DisclosureButton
                            as='a'
                            href='#'
                            className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700'>
                            Dashboard
                        </DisclosureButton>
                        <DisclosureButton
                            as='a'
                            href='#'
                            className='block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                            Team
                        </DisclosureButton>
                        <DisclosureButton
                            as='a'
                            href='#'
                            className='block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                            Projects
                        </DisclosureButton>
                        <DisclosureButton
                            as='a'
                            href='#'
                            className='block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                            Calendar
                        </DisclosureButton>
                    </div>
                    <div className='border-t border-gray-200 pt-4 pb-3'>
                        <div className='flex items-center px-4'>
                            <div className='shrink-0'>
                                <img
                                    alt=''
                                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                    className='size-10 rounded-full'
                                />
                            </div>
                            <div className='ml-3'>
                                <div className='text-base font-medium text-gray-800'>
                                    Tom Cook
                                </div>
                                <div className='text-sm font-medium text-gray-500'>
                                    tom@example.com
                                </div>
                            </div>
                            <button
                                type='button'
                                className='relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'>
                                <span className='absolute -inset-1.5' />
                                <span className='sr-only'>
                                    View notifications
                                </span>
                                <BellIcon
                                    aria-hidden='true'
                                    className='size-6'
                                />
                            </button>
                        </div>
                        <div className='mt-3 space-y-1'>
                            <DisclosureButton
                                as='a'
                                href='#'
                                className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'>
                                Your Profile
                            </DisclosureButton>
                            <DisclosureButton
                                as='a'
                                href='#'
                                className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'>
                                Settings
                            </DisclosureButton>
                            <DisclosureButton
                                as='a'
                                href='#'
                                className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'>
                                Sign out
                            </DisclosureButton>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default NavBar
