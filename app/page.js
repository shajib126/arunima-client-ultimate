
import Image from 'next/image'
import Nav from './navbar/Nav'
import Carousel from './carousel/Carousel'
import Products from './Product/Products'




export default function Home() {

  return (
    <div>
      <Nav/>
      <Carousel/>
      <Products/>
      
    </div>
  )
}
