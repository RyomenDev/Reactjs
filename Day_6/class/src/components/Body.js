import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    //   );

    // const data = await fetch(
    //   "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    // );

    try {
      //   const data = await fetch("http://localhost:5000/resList");

      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      //   console.log(json);

      //   const restaurants = json || [];
      //   console.log(restaurants);

      const restaurants =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ||
        [];
      console.log(restaurants);

      // Update state with fetched restaurant data
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  console.log("Body rendered");

  //   return (
  //     <div className="body">
  //       <div className="res-container">
  //         {filteredRestaurant.map((restaurant) => (
  //           <RestaurantCard key={restaurant.id} resData={restaurant} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  return listOfRestaurants.length === 0 ? (
    <Shimmer /> // until loaded - resemble to page (fake cards)
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))} */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
