import React from "react";
import "./room-show.css";
import img from "../../asset/show-room/norma room.jpg";
import img1 from "../../asset/show-room/king room.jpg";
import img2 from "../../asset/show-room/children room.jpg";
import RoomCard from "../room-card/room-card";

function RoomShow() {
  const rooms = [
    {
      title: "Baby Super",
      img: img2,
      desc: "Designed for children with smart tech like voice tracking.",
      price:"600ETB"
    },
    {
      title: "Gentle Man",
      img: img,
      desc: "Spacious and comfortable, perfect for gentlemen.",
      price:"800ETB"
    },
    {
      title: "King Man",
      img: img1,
      desc: "Luxury room for entrepreneurs with large customizable space.",
      price:"1200ETB"
    },
  ];

  return (
    <section className="room-show">
      {rooms.map((room, index) => (
        <RoomCard
          key={index}
          title={room.title}
          img={room.img}
          desc={room.desc}
          price={room.price}
        />
      ))}
    </section>
  );
}

export default RoomShow;