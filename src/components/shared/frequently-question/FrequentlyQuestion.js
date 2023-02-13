import React, { useState } from 'react'

//styles
import styles from './FrequentlyQuestion.module.css'

//img
import arrowDown from './../../../assets/img/arrow-down.svg'

const FrequentlyQuestion = ({ questionData }) => {
  const [newFaq, setNewFaq] = useState(questionData)

  const handleClick = (id) => {
    setNewFaq(
      questionData.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false },
      ),
    )
  }

  return (
    <div className={styles.questionContainer}>
      <h3 className={styles.title}>پرسش های پرتکرار</h3>
      <div className={styles.questions}>
        {newFaq.map((question) => (
          <>
            <div
              className={styles.question}
              onClick={() => handleClick(question.id)}
            >
              <div className={styles.showRow}>
                <h4>{question.title}</h4>
                <img
                  src={arrowDown}
                  className={question.active ? styles.activeArrow : styles.img}
                  alt="arrow"
                />
              </div>
              <div className={question.active ? styles.active : styles.hideRow}>
                {question.answer}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default FrequentlyQuestion
