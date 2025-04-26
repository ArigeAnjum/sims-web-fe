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
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'
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
                                        className={`inline-flex items-center  ${
                                            ele.active
                                                ? 'text-primary'
                                                : 'text-dark'
                                        } px-1 pt-1 text-[16px] font-medium `}>
                                        {ele.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='hidden lg:ml-6 lg:flex lg:items-center'>
                            <Button>
                                Join Us{' '}
                                <ArrowRightIcon className='w-5 h-5 ml-2' />
                            </Button>
                        </div>
                        <div className='-mr-2 flex items-center lg:hidden'>
                            {/* Mobile menu button */}
                            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-primary focus:outline-hidden focus:ring-inset'>
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

                <DisclosurePanel className='lg:hidden'>
                    <div className='space-y-1 pt-2 pb-3'>
                        {navLinks.map((ele) => (
                            <a
                                key={ele.label}
                                href={ele.href}
                                className={`block pl-6 py-5  ${
                                    ele.active ? 'text-primary' : 'text-dark'
                                } px-1 pt-1 text-[16px] font-medium `}>
                                {ele.label}
                            </a>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default NavBar
