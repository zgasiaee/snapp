import React, { useState } from 'react'

//styles
import styles from './Section.module.css'

//components
import CardSection from '../../shared/card-section/CardSection'

//img
import car from '../../../assets/img/car-taxi.svg'

const Section = ({
  dataSection: { requestData, dataCard, showWhiteCard, color  },
}) => {
  const [requestId, setRequestId] = useState('request-1')

  const requestHandler = (event) => {
    setRequestId(event.target.value)
  }

  const id = requestData.find((item) => item.id === requestId)

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.requestContainer}>
        <div className={styles.buttonContainer}>
          {requestData.map((button) => (
            <button
              value={button.id}
              onClick={requestHandler}
              style={{
                backgroundColor:
                  id.id === requestData[button.number].id && color,
                color: id.id === requestData[button.number].id && '#fff',
              }}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>{id.title}</h4>
          <p className={styles.text}>{id.text}</p>
        </div>
        <figure className={styles.imageContainer}>
          <img src={id.img} alt="img" />
        </figure>
      </div>
      <div className={styles.cardContainer}>
        {dataCard &&
          dataCard.map((card) => (
            <CardSection
              key={card.id}
              title={card.title}
              text={card.text}
              id={card.id}
              type={card.type}
              source={card.source}
              color={color}
            />
          ))}
        {showWhiteCard === true && (
          <div className={styles.card} id={styles.whiteCard}>
            <figure className={styles.carImage}>
              <img src={car} alt="car" />
            </figure>
            <div className={styles.textCard}>
              <h4 className={styles.title}>ثبت نام در تاکسی اینترنتی اسنپ!</h4>
              <p className={styles.text}>
                شما نیز می‌توانید به ناوگان اسنپ ملحق شوید .از مزایای همکاری و
                ثبت نام در تاکسی اینترنتی اسنپ می‌توان به درآمد تضمینی و ساعت
                کاری دلخواه اشاره کرد .بدون نیاز به مراجعه‌ى حضوری، تمام مراحل
                ثبت‌نام را اینترنتی انجام دهید.
              </p>
              <button>بیشتر بدانید</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Section
