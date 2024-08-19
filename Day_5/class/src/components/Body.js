import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [isFiltered, setIsFiltered] = useState(false);

  const HandleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.data.avgRating > 4
    );

    if (isFiltered) {
      setListOfRestaurants(resList);
    } else {
      setListOfRestaurants(filteredList);
    }

    setIsFiltered(!isFiltered);
    // console.log(filteredList);
  };

  return (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button className="filter-btn" onClick={HandleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
