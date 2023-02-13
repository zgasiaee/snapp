import React from 'react'

//style
import styles from './BannerFooter.module.css'

const BannerFooter = ({dataFooter:{img , title , text , button , icon}}) => {
  return (
    <div className={styles.imageContainer} style={{backgroundImage: `url(${img})`}}>
      <div className={styles.dataContainer}>
       {icon &&  <img src={icon} alt="cab" />}
        <h3>{title}</h3>
        <p>{text}</p>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default BannerFooter
