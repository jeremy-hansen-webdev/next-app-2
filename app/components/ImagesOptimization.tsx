

import washington from '@/public/washington.jpg'
import Image from 'next/image'
import React from 'react'

const ImagesOptimization = () => {
  return (
    <div>
      <Image width={400} src={washington} alt='Jeremy and Ellie Washington DC'></Image>
    </div>
  )
}

export default ImagesOptimization
