import React from 'react'

//style
import styles from './Banner.module.css'

const Card = ({img , title , text}) => {
  return (
    <div className={styles.card}>
      <figure className={styles.img}>
        <img src={img} alt={img} />
      </figure>
      <div className={styles.texts}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
