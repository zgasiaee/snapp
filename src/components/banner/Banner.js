import React from 'react';

//style
import styles from './Banner.module.css'

//component
import Card from './Card';

const Banner = ({dataBanner : {img , title , text , cards }}) => {

    return (
        <div className={styles.bannerContainer}>
             <div className={styles.textContainer}>
                <figure className={styles.imgBox}>
                   <img src={img} alt='banner' />
                </figure>
                <div className={styles.textBox}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.text}>{text}</p>
                </div>
             </div>
             <div className={styles.cardContainer}>
                  {
                      cards.map(card => <Card key={card.id} img={card.imgCard} title={card.titleCard} text={card.textCard} />)
                  }
             </div>
        </div>
    );
};

export default Banner;