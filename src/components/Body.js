import React from "react";
import RestrountCard from "./RestrauntCard";
import { restrautList } from "../Constants";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText))
    
}

const Body = () => {
    const [searchText, setSearchText] = React.useState("");
    const [restaurants, setRestaurants] = React.useState(restrautList);

    // const [boolean, setBoolean] = React.useState("false");




    return (
        <>
            <div className="search-container">
                <input value={searchText} type="text" className="search-input" placeholder="search" onChange={(e)=> setSearchText(e.target.value)} />
                <button className="search-btn" onClick={()=>{
                    setRestaurants(filterData(searchText, restaurants))
                }}>Search</button>
            </div>
             <div className="restrount-list">
             {restaurants.map((restaurant)=>{
                return <RestrountCard {...restaurant.data} key={restaurant.data.id}/>
             })}
            </div>
        </>

    )
}

export default Body;