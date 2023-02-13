import React from 'react'

//component
import Slider from '../slider/Slider'
import Article from '../shared/article/Article'
import Layout from '../shared/Layout'

//image
import aboutSlider from './../../assets/img/about-slider.jpg'
import activeCities from './../../assets/img/active-cities.jpg'

//styles
import styles from './About.module.css'

const About = () => {
  const dataSlider = {
    img: aboutSlider,
    title: 'تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!',
    text:
      'از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیت سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.',
    buttonText: 'ورود به وب اپلیکیشن اسنپ',
    showInput: false,
    color: '#06d170',
  }

  const articleData = {
    items: [],
    title: 'درباره‌ی ما',
    cards: [
      {
        id: 0,
        bgc: '#ffffff',
        title: '',
        text:
          'شرکت ایده گزین ارتباطات روماک، با نام تجاری اسنپ، در سال ۱۳۹۳ راه‌اندازی شد. اسنپ شرکتی پویا و مبتنی بر داده است که از ذهن پویا و خلاق جوانان ایران قدرت می‌گیرد. این شرکت به عنوان راهکاری اثربخش برای انجام سفرهای درون شهری، فعالیت خود را با یک تیم کوچک آغاز کرد و در کمتر از چند سال به بزرگ‌ترین سامانه هوشمند حمل‌ونقل در ایران تبدیل شد. دکتر ایاد الکسار و دکتر محمود فوز هم‌بنیان‌گذاران این شرکت هستند. اپلیکیشن اسنپ بعد از گذشت چهار سال از شروع فعالیتش به سوپراپ تبدیل شد و اکنون خدمات گروه اسنپ در آن ارائه می‌شود. امکان درخواست خودرو، موتور، وانت، سفارش غذا، خدمات پزشکی و مشاوره آنلاین، رزرو هتل و اقامتگاههای ارزان، خرید بلیط هواپیما، اتوبوس و … در این اپلیکیشن جامع به صورت یکجا فراهم است.',
      },
    ],
  }

  return (
    <div>
      <Layout id='6'>
        <div className={styles.AboutContainer}>
          <Slider dataSlider={dataSlider} />
          <Article articleData={articleData} />
          <h4 className={styles.title}>اسنپ در چه شهرهایی فعال است؟</h4>
          <figure className={styles.imgContainer}>
            <img src={activeCities} alt="cities" />
          </figure>
        </div>
      </Layout>
    </div>
  )
}

export default About
