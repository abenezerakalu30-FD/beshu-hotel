import React from 'react'
import SearchFilter from '../components/search-filter/search-filter'
import Header from '../components/Header/Header'
import Footer from '../components/footer/footer'
import SectionTitle from '../components/section-title/section-title'

function RoomPage() {
  return (
    <>
    <Header/>
    <SectionTitle title={"Fillter Room"}/>
    <SearchFilter/>
    <Footer/>
    </>
  
  )
}

export default RoomPage