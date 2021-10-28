import React from 'react'
import unchecked from './../../../static/icons/markbook_unchecked.svg'
import checked from './../../../static/icons/markbook_checked.svg'
import styles from './Card.module.css'

const Card = ({card}) => {
    return (
        <div className={styles.card} style={{backgroundImage:"url("+card.image+")"}} >
                <div className={styles.card_header}>
                    <span className={styles.day}>{card.date.slice(0,2)}</span>
                    <img src={unchecked}/>
                </div>
                <span className={styles.card_title}>{card.name}</span>
            </div>
    );
};

export default Card;