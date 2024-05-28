import React from "react";
import ImgCard from "./ImgCard";
import { useApiData } from "../context/ApiContext";
import { TiltCard } from "./TiltCard";

const CardContainer = ({ searchTerm }) => {
  const allData = useApiData();

  const filteredData = allData?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-cards p-10 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-10">
      {filteredData
        ? filteredData.map((item) => (
            <TiltCard>
              <ImgCard
                key={item[0]}
                imgUrl={item.image}
                productName={item.name}
                rating={Math.floor(item.rating.average)}
              />
            </TiltCard>
          ))
        : "Loading..."}
    </div>
  );
};

export default CardContainer;
