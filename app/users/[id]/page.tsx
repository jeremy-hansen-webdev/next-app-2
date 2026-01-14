import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {id: string}
}

const UserDetailPage = async ({params}: Props) => {
  const {id} = await params
  if (Number(id) > 10) notFound()
  return (
    <div>
      User Id {id}
    </div>
  )
}

export default UserDetailPage
