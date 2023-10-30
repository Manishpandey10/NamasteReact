import RestroCard from "./RestroCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  // state Variables
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);

//this is array destructuring on the fly ^^^^^
//like this.
// const arr = useState([])
// const[listOfRestraunts, setListOfRestraunts] = arr
  return (
    <div className="body ">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestraunts.filter((res) => {
             return res.info.avgRating > 4.1;
            });
            console.log(filteredList);
            setListOfRestraunts(filteredList);
          }}
        >
          Today's Top Restraunts
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestroCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
