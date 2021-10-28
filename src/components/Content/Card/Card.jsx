import React, { useState } from 'react'
import unchecked from './../../../static/icons/markbook_unchecked.svg'
import checked from './../../../static/icons/markbook_checked.svg'
import styles from './Card.module.css'

const Card = ({card}) => {

    const getIsFavorState = () => {
        const favorValue = localStorage.getItem(card.id);
        if(favorValue !== null)
            return true;

        return false;
    }

    const isFavorite = () => {
        const favorValue = localStorage.getItem(card.id);
        if(favorValue !== null)
            return true;

        return false;
    }

    const [isFavor, setIsFavor] = useState(getIsFavorState());



    const changeFavor = () => {
        if(isFavor){
            localStorage.removeItem(card.id)
        }
        else{
            localStorage.setItem(card.id,"true")
        }
        setIsFavor(!isFavor);
    }
    
    return (
        <div className={styles.card} style={{backgroundImage:"url("+card.image+")"}} >
                <div className={styles.card_header}>
                    <span className={styles.day}>{card.date.slice(0,2)}</span>
                    <img src={isFavorite()?checked:unchecked} onClick={(e) => changeFavor()}/>
                </div>
                <span className={styles.card_title}>{card.name}</span>
            </div>
    );
};

export default Card;