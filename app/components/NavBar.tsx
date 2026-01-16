'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const { status, data: session } = useSession()
  return (
    <div className='flex justify-between items-center bg-slate-300 p-4'>
      <Link href={'/'}>Home</Link>
      <Link href={`/admin`}>Admin</Link>
      <Link href={`/users`}>Users</Link>
      <Link href={`/products`}>Product</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div className='flex flex-col'>
          <p>{session.user?.name}</p>
          <Link href={`/api/auth/signout`}>Sign Out</Link>
        </div>
      )}
      {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Login</Link>}
    </div>
  )
}

export default NavBar