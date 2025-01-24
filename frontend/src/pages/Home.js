import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={'airpodes'} heading={"Top's Airpodes"}/>
      <VerticalCardProduct category={'laptops'} heading={"Top And Polular's Laptop's"}/>
      <HorizontalCardProduct category={'watches'} heading={"Popular's Watches"}/>
      <HorizontalCardProduct category={'printers'} heading={"Printers"}/>


      <VerticalCardProduct category={'mobiles'} heading={"Mobiles"}/>
      <VerticalCardProduct category={'mouse'} heading={"Mouse"}/>
      <VerticalCardProduct category={'televisions'} heading={"Televisions"}/>
      <VerticalCardProduct category={'camera'} heading={"Camera And Photography"}/>
      <VerticalCardProduct category={'earphones'} heading={"Wired Eaphones"}/>
      <VerticalCardProduct category={'speakars'} heading={"Speakars"}/>
      <VerticalCardProduct category={'trimmers'} heading={"Trimmers"}/>
      <VerticalCardProduct category={'refrigerator'} heading={"Best Refrigerator"}/>









    </div>
  )
}

export default Home
