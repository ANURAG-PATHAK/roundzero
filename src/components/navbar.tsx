"use client"
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const routes = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    const navVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    }

    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    return (
        <motion.div
            className='bg-white/80 backdrop-blur-md sticky z-50 top-0 inset-x-0 h-16'
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <header className='relative'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            <div className='md:hidden'>
                                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                    <SheetTrigger asChild>
                                        <Button variant='ghost' size='icon'>
                                            <Menu className='h-6 w-6' />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                                        <nav className='flex flex-col gap-4'>
                                            {routes.map((route, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover="hover"
                                                    variants={linkVariants}
                                                >
                                                    <Link
                                                        href={route.href}
                                                        className='block px-2 py-1 text-lg'
                                                        onClick={() => setIsOpen(false)}>
                                                        {route.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </nav>
                                    </SheetContent>
                                </Sheet>
                            </div>

                            <motion.div
                                className='ml-4 flex lg:ml-0'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href='/'>
                                    <h1 className='text-xl font-bold'>LOGO</h1>
                                </Link>
                            </motion.div>

                            <div className='hidden md:ml-8 md:flex md:gap-4'>
                                {routes.map((route, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover="hover"
                                        variants={linkVariants}
                                    >
                                        <Link
                                            href={route.href}
                                            className='text-sm font-medium text-gray-700 hover:text-gray-800'>
                                            {route.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6'>
                                    <motion.div whileHover="hover" variants={linkVariants}>
                                        <Link
                                            href='/sign-in'
                                            className='text-sm font-medium text-gray-700 hover:text-gray-800'>
                                            Sign in
                                        </Link>
                                    </motion.div>
                                    <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href='/sign-up'>
                                            <Button>Sign up</Button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </motion.div>
    )
}

export default Navbar 