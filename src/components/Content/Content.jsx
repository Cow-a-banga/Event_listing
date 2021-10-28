import React, { useState } from "react";
import Cards from './Cards/Cards';
import Filters from './Filters/Filters';


const Content = ({data}) => {

    const [currentCity, setCurrentCity] = useState("All");
    const [currentMonth, setCurrentMonth] = useState("All");
    const [isFavorites, setIsFavorites] = useState(false);


    return (
        <div>
            <Filters data={data} currentCity={currentCity} currentMonth={currentMonth} isFavorites={isFavorites} 
                     setCurrentCity={setCurrentCity} setCurrentMonth={setCurrentMonth} setIsFavorites={setIsFavorites}/>
            <Cards data={data} currentCity={currentCity} currentMonth={currentMonth} isFavorites={isFavorites}/>
        </div>
    );
};

export default Content;