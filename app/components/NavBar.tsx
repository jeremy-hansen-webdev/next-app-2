import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  return (
    <div className='flex justify-between bg-slate-300 p-4'>
      <Link href={'/'}>Home</Link>
      <Link href={`/admin`}>Admin</Link>
      <Link href={`/users`}>Users</Link>
      <Link href={`/products`}>Product</Link>
    </div>
  )
}

export default NavBar
