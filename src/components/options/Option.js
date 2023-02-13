import React from 'react'
import { Link } from 'react-router-dom'

//style
import styles from './Options.module.css'

const Option = ({ img, title, text, slug }) => {
  return (
    <Link
      to={slug}
      className={styles.option}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }}
    >
      <figure className={styles.imgContainer}>
        <img src={img} alt={img} />
      </figure>
      <div className={styles.textContainer}>
        <h5 className={styles.bigText}>{title}</h5>
        <p className={styles.smallText}>{text}</p>
      </div>
    </Link>
  )
}

export default Option
