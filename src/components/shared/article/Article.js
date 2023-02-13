import React from 'react'

//style
import styles from './Article.module.css'

const Article = ({ articleData: { items, title, cards } }) => {
  return (
    <div className={styles.articleContainer}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.iconContainer}>
        {items.map((item) => (
          <li>
            <img src={item.img} alt="img" key={item.id} />
          </li>
        ))}
      </ul>

      {cards.map((card) => (
        <div className={styles.textBox} style={{ backgroundColor: card.bgc }}>
          <h5 className={styles.titleText}>{card.title}</h5>
          <p className={styles.text}>{card.text}</p>
        </div>
      ))}

    </div>
  )
}

export default Article
