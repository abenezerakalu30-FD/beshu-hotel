import React, { lazy, useState } from "react";
import img from "../../asset/show-room/norma room.jpg";
import img1 from "../../asset/show-room/king room.jpg";
import img2 from "../../asset/show-room/children room.jpg";
import img3 from "../../asset/room/family-room.jpg";
import img4 from "../../asset/room/twins-room.jpg";
import "./search-filter.css";
import Select from "react-select"
import RoomCard from "../room-card/room-card";
const Roomoptions = [
  { value: "1", label: "1 Room" },
  { value: "2", label: "2 Rooms" },
];
const FamilyOption = [
    {value:1, label:"2 Member"},
    {value:2, label:"3 Member"},
    {value:3, label:"4 Member"},
    {value:4, label:"5 Member"}

]
const PriceOption = [
    {value:1, label:"below 500"},
    {value:2, label:"600"},
    {value:3, label:"800"},
    {value:4, label:"above 600"}



]
const roomsData = [
  {
    id: 1,
    name: "Baby Super",
    img: img2,
    price: 500,
    family: 1,
    rooms: 1,
    desc: "Designed for children with smart tech like voice tracking.",
  },
  {
    id: 2,
    name: "King Man",
    img: img1,
    price: 1000,
    family: 2,
    rooms: 2,
    desc: "Luxury space for entrepreneurs with a large customizable room and bathroom.",
  },
  {
    id: 3,
    name: "Gentle Man",
    img: img,
    price: 700,
    family: 1,
    rooms: 1,
    desc: "Comfortable and elegant room with spacious design.",
  },
  {
    id: 4,
    name: "Family Tour",
    img: img3,
    price: 1000,
    family: 4,
    rooms: 3,
    desc: "Perfect for families with large space and multiple beds.",
  },
  {
    id: 5,
    name: "Baby Twins",
    img: img4,
    price: 700,
    family: 2,
    rooms: 2,
    desc: "Suitable for twins and small families with workspace.",
  },
];

function SearchFilter() {
  const [filters, setFilters] = useState({
    rooms: "",
    family: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  const filteredRooms = roomsData.filter((room) => {
    return (
      (!filters.rooms || room.rooms >= filters.rooms) &&
      (!filters.family || room.family >= filters.family) &&
      (!filters.price ||
        (filters.price === "1000+" ? room.price >= 1000 : room.price <= filters.price))
    );
  });

  return (
    <div className="search-filter">
      {/* FILTER FORM */}
      <form className="search-filter-form">
        <div className="input-group">
          <label htmlFor="rooms">Room Amount</label>
         <Select options={Roomoptions} onChange={handleChange}/>
        </div>

        <div className="input-group">
          <label htmlFor="family">Family Amount</label>
        <Select options={FamilyOption} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="price">Price</label>
        <Select options={PriceOption} onChange={handleChange}/>
        </div>
      </form>

      {/* RESULTS */}
      <div className="search-result">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
           <RoomCard title={room.name} key={room.id} img={room.img} desc={room.desc} price={room.price}/>
          ))
        ) : (
          <p className="no-result">No rooms match your filter.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;