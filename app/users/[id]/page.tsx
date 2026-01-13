import React from 'react'

interface Props {
    params: {id: string}
}

const UserDetailPage = async ({params}: Props) => {
    const {id} = await params
  return (
    <div>
      User Id {id}
    </div>
  )
}

export default UserDetailPage
