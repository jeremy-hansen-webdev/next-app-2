'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import ImagesOptimization from "./components/ImagesOptimization";
import ProductCard from "./components/ProductCard";



const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'), 
    {loading: () => <p>Loading...</p>})


export default function Home() {
  // const session = await getServerSession(authOptions)
  const [isVisible, setIsVisible] = useState(false)


  return (
    <main>
      {/* <h1>Hello {session && session.user?.name}</h1> */}
      <ProductCard/>
      <button onClick={async () => {
        const _ = (await import('lodash')).default
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'},
        ]
        const sorted = _.orderBy(users, ['name'])
        console.log(sorted)
      } }>Show</button>
      {/* {isVisible && <HeavyComponent/>} */}
      <ImagesOptimization/>
    </main>
  );
}
