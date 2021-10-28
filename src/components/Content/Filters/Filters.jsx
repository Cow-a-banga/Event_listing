import React from "react";
import styles from './Filters.module.css'

const Filters = ({data, currentCity, currentMonth, isFavorites, setCurrentCity, setCurrentMonth, setIsFavorites}) => {

  var cities = new Set(["All"]);
  var months = new Set();

  const monthsNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const DateToMonthNumber = (date) => {
    const dateParts = date.split(".");
    return Number(dateParts[1]);
  };

  
  data.forEach((item) => {
    cities.add(item.city);
    months.add(DateToMonthNumber(item.date));
  });

  const monthsArr = Array.from(months).sort((a,b)=>a-b)
  const monthsArrNames = ["All"]
  monthsArr.forEach(month=>monthsArrNames.push(monthsNames[month]))

  const renderOptions = (data) => {
    const options = [];
    data.forEach((item) => {
      options.push(<option key={item}> {item} </option>);
    });
    return options;
  }



  return(
    <div className={styles.filter}>
    <div className={styles.filter_block}>
        <span className={styles.select_text}>City:</span>
        <select
          value={currentCity}
          onChange={(item) => setCurrentCity(item.target.value)}>
            {renderOptions(cities)}
        </select>
    </div>
    <div className={styles.filter_block}>
        <span className={styles.select_text}>Month:</span>
        <select
          value={currentMonth}
          onChange={(item) => setCurrentMonth(item.target.value)}>
            {renderOptions(monthsArrNames)}
        </select>
    </div>
    <div className={styles.filter_block}>
        <span className={styles.select_text}>Favorites:</span>
        <input className={styles.favorites_checkbox} type="checkbox" onClick={(e)=>setIsFavorites(!isFavorites)}></input>
    </div>
    </div>
  );
};

export default Filters;