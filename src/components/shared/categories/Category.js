import React from 'react'
import { Link } from 'react-router-dom'

//style
import styles from './Categories.module.css'

const Category = ({ name, img, width, height, slug, cardBgc }) => {
  return (
    <Link
      to={slug}
      style={{ textDecoration: 'none' }}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }}
    >
      <div
        className={styles.categoryCard}
        style={{ width: width, backgroundColor: cardBgc }}
      >
        <div>
          <img src={img} alt={img} style={{ height: height }} />
        </div>
        <span className={styles.name}>{name}</span>
      </div>
    </Link>
  )
}

export default Category
