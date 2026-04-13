import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import Home from "./pages/Home";
import "@fontsource/playfair-display"
import "@fontsource/poppins"
import "@fontsource/lemon"
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import RoomPage from "./pages/room";
import Blog from "./pages/blog";
import Book from "./pages/book";
function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/room" element={<RoomPage/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/book" element={<Book/>}/>




    </Routes>
   
  )
}

export default App;