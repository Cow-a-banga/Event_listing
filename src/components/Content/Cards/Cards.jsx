import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({data, currentCity, currentMonth, isFavorites}) => {

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
    
    const DateToMonth = (date) => {
        const dateParts = date.split(".");
        const month = Number(dateParts[1]);
        return monthsNames[month];
      };

    const filterData = () => {
        const cards = [];
        data.forEach(d => {
            if((currentCity === "All" || d.city === currentCity) &&
              (currentMonth === "All" || DateToMonth(d.date) === currentMonth) &&
              (isFavorites && localStorage.getItem(d.id) === "true" || !isFavorites))
                cards.push(d);
        });
        return cards
    }

    return (
        <div className={styles.cards}>
                {
                filterData().map(card =>
                    <Card card={card}/>)
                }
        </div>
    );
};

export default Cards;