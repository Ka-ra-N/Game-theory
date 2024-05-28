import React from "react";
import logo from "/Logo.png";
import search from "/search.png";
import avatar from "/Avatar.webp";

const Navbar = ({onSearchChange}) => {

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <nav className="p-4 flex-between gap-5">
      {/* Logo */}
      <RoundImg img={logo} imgAlt={"Logo"}/>

      {/* Search Box */}
      <div className="search-box bg-[#334155] flex-between p-2 rounded-xl flex-1 gap-5">
        <img src={search} alt="Search" className="invert size-5" />
        <input
          type="search"
          name="Search"
          id="search-box"
          className="bg-transparent placeholder:text-sm placeholder:text-white/80 outline-none flex-1"
          placeholder='Try Searching "New"'
          onChange={handleInputChange}
        />
      </div>

      {/* Avatar */}
      <RoundImg img={avatar} imgAlt={"Avatar"} avatar={true}/>
    </nav>
  );
};

const RoundImg = ({avatar, img, imgAlt}) => {
  return (
    <div
      className={`logo-left-side sm:size-10 size-8 overflow-hidden rounded-full ${
        avatar ? "" : "border border-[#38BDF8]"
      }`}
    >
      <img src={img} alt={imgAlt} className="size-full object-cover" />
    </div>
  );
};

export default Navbar;
