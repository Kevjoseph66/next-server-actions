import React from 'react'
import { ModeToggle } from './theme-toggle-button';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center py-10'>
      <Link href='/'>
        <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>NextActionsCRUD</h1>
      </Link>

      <div className='flex gap-x-2'>
        <Link href='/new' className={buttonVariants({ variant: 'secondary' })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default NavBar