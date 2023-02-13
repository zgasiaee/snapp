import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//image
import logo from './../../assets/img/logo.svg'
import menue from './../../assets/img/menue.svg'

const Ul = styled.ul`
  width: 100%;
  height: 13vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-right: 10em;
  li {
    list-style-type: none;
    padding: 0 1em;
    cursor: pointer;
    font-size: 1em;
  }
  a {
    text-decoration: none;
  }
  @media only screen and (max-width: 870px) {
    display: none;
  }
  @media only screen and (max-width: 1150px) {
    li {
      font-size: 0.85em;
    }
  }
  @media only screen and (max-width: 1000px) {
    padding-right: 4em;
    li {
      font-size: 0.78em;
    }
  }
`
const Div = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
  position: relative;
  cursor: pointer;
  div {
    position: absolute;
    top: 100%;
    right: 0;
    width: 45%;
    height: 84vh;
    background-color: #fff;
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    align-item: center;
  }
  a {
    text-decoration: none;
    color: #5b6691;
    padding: 1em;
    cursor: pointer;
    font-size: 0.93em;
  }
  @media only screen and (min-width: 870px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

const Navbar = ({ id }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const values = [1, 2, 3, 4, 5, 6, 7]

  const color = values.map((value) => {
    var color
    value == id ? (color = '#22d37d') : (color = '#5b6691')
    return color
  })

  return (
    <>
      <Ul>
        <li>
          <Link to='/'>
             <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/career" style={{ color: color[0] }}>
            فرصت های شغلی
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: color[1] }}>
            بلاگ
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: color[2] }}>
            باشگاه رانندگان
          </Link>
        </li>
        <li>
          <Link to="/register" style={{ color: color[3] }}>
            ثبت نام راننده اسنپ
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: color[4] }}>
            پنل سازمانی
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: color[5] }}>
            درباره ما
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: color[6] }}>
            تماس با ما
          </Link>
        </li>
      </Ul>
      <Div active={active}>
        <figure onClick={handleClick}>
          <img src={menue} alt="meune" />
        </figure>
        <Link to='/'>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        </Link>
        <div>
          <Link to="/career" style={{ color: color[0] }}>
            فرصت های شغلی
          </Link>
          <Link to="/" style={{ color: color[1] }}>
            بلاگ
          </Link>
          <Link to="/" style={{ color: color[2] }}>
            باشگاه رانندگان
          </Link>
          <Link to="/register" style={{ color: color[3] }}>
            ثبت نام راننده اسنپ
          </Link>
          <Link to="/" style={{ color: color[4] }}>
            پنل سازمانی
          </Link>
          <Link to="/about" style={{ color: color[5] }}>
            درباره ما
          </Link>
          <Link to="/contact" style={{ color: color[6] }}>
            تماس با ما
          </Link>
        </div>
      </Div>
    </>
  )
}

export default Navbar
