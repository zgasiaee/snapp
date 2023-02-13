import React from 'react'

//style
import styles from './Options.module.css'

//image
import bike from './../../assets/img/bike.svg'
import bus from './../../assets/img/bus.png'
import cab from './../../assets/img/cab.svg'
import club from './../../assets/img/club.svg'
import doctor from './../../assets/img/doctor.svg'
import domesticTrip from './../../assets/img/Domestic Trip.png'
import food from './../../assets/img/food.svg'
import market from './../../assets/img/market.svg'
import moving from './../../assets/img/Moving.png'
import newShop from './../../assets/img/new Shop.png'
import pay from './../../assets/img/pay.svg'
import Pickup from './../../assets/img/Pickup-new.png'
import service from './../../assets/img/Service Icon.png'
import ticket from './../../assets/img/ticket-icon.svg'
import train from './../../assets/img/train.png'
import hotel from './../../assets/img/hotel.png'
import trip from './../../assets/img/trip.svg'

//component
import Option from './Option'

const Options = () => {
  const data = [
    {
      id: 1,
      img: cab,
      title: 'تاکسی اینترنتی',
      text: 'امکان درخواست آنلاین خودرو با اسنپ',
      slug:'/taxi-ride'
    },
    {
      id: 2,
      img: bike, 
      title: 'پیک موتوری',
      text: 'حمل و نقل با اسنپ' ,
      slug:'/bike-delivery'
    },
    { 
      id: 3,
      img: Pickup, 
      title: 'درخواست وانت',
      text: 'حمل و نقل با اسنپ',
      slug:'/pickup-truck'
      
    },
    {
      id: 4,
      img: food,
      title: 'سفارش آنلاین غذا',
      text: 'سفارش غذا، نان و شیرینی با اسنپ',
      slug:'/online-food'
    },
    {
      id: 5,
      img: market,
      title: 'سوپرمارکت آنلاین',
      text: 'تهیه اقلام روزانه با اسنپ',
      slug:'/online-supermarket'
    },
    {
      id: 6,
      img: market,
      title: 'اسنپ اکسپرس',
      text: 'تحویل کمتر از ۳۰ دقیقه' ,
      slug:'/express'
    },
    { 
      id: 7,
      img: domesticTrip,
      title: 'بلیط پرواز داخلی',
      text: 'گردشگری با اسنپ',
      slug:'/flights-ticket'
    },
    { 
      id: 8,
      img: domesticTrip, 
      title: 'بلیط پرواز خارجی',
      text: 'گردشگری با اسنپ',
      slug:'/international-flight'
    },
    { 
      id: 9,
      img: doctor,
      title: 'دکتر', 
      text: 'درمان با اسنپ' ,
      slug:'/medical-services'
    },
    { 
      id: 10,
      img: hotel,
      title: 'رزرو هتل',
      text: 'گردشگری با اسنپ' ,
      slug:'/hotels'
    },
    {  
      id: 11,
      img: trip,
      title: 'رزرو اقامتگاه',
      text: 'گردشگری با اسنپ' ,
      slug:'/lodgings'
    },
    {
      id: 12,
      img: newShop,
      title: 'فروشگاه',
      text: 'خرید از فروشگاه های معتبر شهر',
      slug:'/shop'
    },
    {
      id: 13,
      img: bus,
      title: 'بلیط اتوبوس',
      text: 'گردشگری با اسنپ',
      slug:'/bus-ticket'
    },
    {
      id: 14,
      img: train,
      title: 'بلیط قطار',
      text: 'گردشگری با اسنپ',
      slug:'/train-ticket'
    },
    {
      id: 15,
      img: club,
      title: 'اسنپ! ‌کلاب',
      text: 'باشگاه مشتریان اسنپ!',
      slug:'/club'
    },
    {
      id: 16,
      img: service,
      title: 'سرمایه‌گذاری',
      text: 'خدمات غیر حضوری بورس و سرمایه‌گذاری',
      slug:'/investment-services'
    },
    {
      id: 17,
      img: moving,
      title: 'اسباب‌کشی منزل',
      text: 'حمل و نقل با اسنپ',
      slug:'/moving-services'
    },
    {
      id: 18,
      img: pay,
      title: 'سرویس اعتباری',
      text: 'پرداخت با اسنپ',
      slug:'/snapp-credit'
    },
    {
      id: 19,
      img: ticket,
      title: 'اسنپ تیکت',
      text: 'خرید آنلاین بلیط با اسنپ',
      slug:'/ticket'
    },
  ]

  return (
    <div className={styles.optionsContainer}>
      <h3 className={styles.title}>یک اپلیکیشن، برای تمام نیازها</h3>
      <div className={styles.options}>
         {
             data.map(option => <Option img={option.img} title={option.title} text={option.text} key={option.id} slug={option.slug} />)
         }
      </div>
    </div>
  )
}

export default Options
