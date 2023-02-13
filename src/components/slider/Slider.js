import React from 'react'
import styled from 'styled-components'

//style
import styles from './Slider.module.css'


const Div = styled.div`
  width: 100%;
  height: 65vh;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};
  @media only screen and (max-width:870px){
    flex-direction:column-reverse;
    height:80vh;
  }
`

const Slider = ({
  dataSlider: { img, title, text, buttonText, showInput , color },
}) => {
  function toPersianNumeral(en) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '٠١٢٣٤٥٦٧٨٩'.slice(+t, +t + 1)
    })
  }

  return (
    <Div color={color}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.normalText}>{text}</p>
        {showInput && (
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder={`${toPersianNumeral('09xxxxx6931')}`}
            />
            <button className={styles.button}>ارسال لینک</button>
          </div>
        )}
        <button style={{marginTop: showInput ? '1em' : '7em'}} className={styles.submit}>{buttonText}</button>
      </div>
      <figure className={styles.imgContainer}>
        <img src={img} alt="slider" />
      </figure>
    </Div>
  )
}

export default Slider
