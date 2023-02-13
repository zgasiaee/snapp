import React from 'react'

//component
import Banner from '../../components/banner/Banner'
import IconBar from '../../components/iconBar/IconBar'
import Options from '../../components/options/Options'
import Slider from '../../components/slider/Slider'
import VideoSection from '../../components/videoSection/VideoSection'

//image
import mainSlider from '../../assets/img/main-slider.jpg'
import banner from '../../assets/img/main-banner.jpg'
import easy from '../../assets/img/main-card-1.png'
import eco from '../../assets/img/main-card-2.png'
import fast from '../../assets/img/main-card-3.png'
import Layout from './Layout'

const HomePage = () => {
  const dataSlider = {
    img: mainSlider,
    title: 'تجربه زندگی راحت تر، سریع تر و به صرفه تر با سوپراپلیکیشن اسنپ!',
    text:
      'از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید',
    buttonText: 'ورود به وب اپلیکیشن اسنپ',
    showInput: true,
    color: '#21aa58',
  }

  const dataBanner = {
    img: banner,
    title: 'سوپر اپ اسنپ؛ پاسخی به تمام نیازها',
    text:
      'اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید',
    cards: [
      {
        id: 1,
        imgCard: easy,
        titleCard: 'آسان',
        textCard:
          'برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید',
      },
      {
        id: 2,
        imgCard: fast,
        titleCard: 'سریع',
        textCard:
          'قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست',
      },
      {
        id: 3,
        imgCard: eco,
        titleCard: 'به صرفه',
        textCard:
          'سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.',
      },
    ],
  }

  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Options />
        <Banner dataBanner={dataBanner} />
        <VideoSection />
      </Layout>
    </div>
  )
}

export default HomePage
