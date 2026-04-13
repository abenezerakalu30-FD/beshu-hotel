import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RoomShow from "../components/room-show/room-show";
import SectionTitle from "../components/section-title/section-title";
import Partner from "../components/partner/partner";
import Testmonial from "../components/testmonial/testmonial";
import Footer from "../components/footer/footer";

function Home(){
    return(
        <>
         <Header/>
        <Hero/>
        <SectionTitle title={"Featured Bed"}/>
        <RoomShow/>
        <Partner/>
        <SectionTitle title={"Voice of Client"}/>
        <Testmonial/>
        <Footer/>
        </>
       
    )
}

export default Home;