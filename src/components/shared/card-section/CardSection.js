import React from 'react'
import styled from 'styled-components'

//styles
import styles from '../section/Section.module.css'


const Div = styled.div`
  border-radius: 0.7em;
  width: 500px;
  min-height: 75px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  margin: 1em;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.color};
    transition: 0.3s;
  }
  @media only screen and (max-width:1000px){
    width: 85%;
  }
`


const CardSection = ({ title, text, id, type , source ,color }) => {
  return (
    <>
      {id !== 2 ? (
        <Div className={styles.card} color={color}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text} </p>
        </Div>
      ) : type === 'video' ? (
        <video controls className={styles.video} >
          <source src={source} type="video/mp4" />
        </video>
      ) : (
        <figure className={styles.imgBoxCard}>
            <img src={source} alt="img" />
        </figure>
      )}
    </>
  )
}

export default CardSection
