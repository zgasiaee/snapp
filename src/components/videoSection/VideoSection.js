import React from 'react'
import { Link } from 'react-router-dom'

//image
import benefits from './../../assets/img/benefits.png'
import carfix from './../../assets/img/carfix.png'
import hour from './../../assets/img/hour.png'
import income from './../../assets/img/income.png'

//video
import video from '../../assets/video/jazb-ranande.mp4'

//style
import styles from './VideoSection.module.css'

//component
import Card from './Card'

const VideoSection = () => {

  const data = [
    {
    id : 1 , img : income , title : 'درآمد تضمینی + پاداش‌های ماهانه و هفتگی' , text : 'با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.'
    } ,
    {
      id : 2 , img : hour , title : 'ساعت کاری دلخواه' , text : 'فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.'
    } ,
    {
      id : 3 , img : benefits , title : 'مزایا و خدمات باشگاه رانندگان' , text : 'بدر باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.'
    } ,
    {
      id : 4 , img : carfix , title : 'کار‌فیکس' , text : 'باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.'
    } 
]
  return (
      <div className={styles.VideoSectionContainer}>
          <h1>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h1>
          <p>بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
          <Link to='/register' className={styles.button} onClick={()=> window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>ثبت‌ نام رانندگان</Link>
            <video controls >
                <source src={video} type="video/mp4"/>
            </video>
          <div className={styles.cardContainer}>
            {
              data.map(card => <Card key={card.id} img={card.img} title={card.title} text={card.text} />)
            }
          </div>
              
      </div>
  )
}

export default VideoSection
