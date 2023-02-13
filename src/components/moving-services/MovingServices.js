import React from 'react'

//component
import Slider from '../slider/Slider'
import IconBar from '../iconBar/IconBar'
import Banner from '../banner/Banner'
import Section from '../shared/section/Section'
import FrequentlyQuestion from '../shared/frequently-question/FrequentlyQuestion'
import BannerFooter from '../shared/banner-footer/BannerFooter'
import Layout from '../shared/Layout'

//image
import movingServicesSlider from './../../assets/img/moving-services-slider.jpg'
import movingServicesSection from './../../assets/img/moving-services-section.jpg'
import card1 from './../../assets/img/moving-card-1.png'
import card2 from './../../assets/img/moving-card-2.png'
import card3 from './../../assets/img/moving-card-3.png'
import movingRequest1 from '../../assets/img/moving-request-1.jpg'
import movingRequest2 from '../../assets/img/moving-request-2.jpg'
import movingRequest3 from '../../assets/img/moving-request-3.jpg'
import movingFooter from '../../assets/img/moving-footer.jpg'
import moving from '../../assets/img/Moving.png'
import movingtImg from '../../assets/img/moving-img.jpg'

const MovingServices = () => {
  const dataSlider = {
    img: movingServicesSlider,
    title: 'اسباب کشی با اسنپ!',
    text:
      'سرویس اسباب کشی اسنپ دردسرهای جابه‌جایی و انتقال وسایل به روش سنتی را از بین برده است. تمام هزینه و قیمت اسباب کشی منزل یا شرکت شما به محل جدید، قبل از سفارش قابل مشاهده و تایید است.',
    buttonText: 'ثبت آنلاین حمل',
    showInput: false,
    color: '#06d170',
  }

  const dataBanner = {
    img: movingServicesSection,
    title: 'مزایای درخواست آنلاین اسباب کشی با اسنپ',
    text:
      'سرویس اسباب کشی اسنپ به صورت آنلاین و در لحظه، درخواست‌ها را بررسی و با ارایه راهکاری هوشمند برای رفع نیاز شما به خدمات حمل و نقل وسایل، همیشه در دسترس است.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'سریع و قابل اعتماد',
        textCard:
          'اسباب کشی با اسنپ به لطف وجود سیستم حمل بار سریع و مطمئن، در نهایت احتیاط و توسط نیروهای باتجربه انجام می‌شود.',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'قیمت‌گذاری شفاف',
        textCard:
          'ساختار قیمت‌گذاری در اسنپ کاملاً شفاف است و می‌توانید با هزینه مناسب، وسایل خود را از نقطه‌ای به نقطه دیگر منتقل کنید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'پشتیبانی تمام وقت',
        textCard:
          'پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک و پاسخ‌دهی به تمام سوالات شما است.',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: movingRequest1,
        title: 'درخواست خدمات اسباب کشی اسنپ',
        name: 'ثبت درخواست',
        text:
          'در سوپر اپلیکیشن اسنپ آیکن اسباب کشی را انتخاب کنید. در زمان ثبت سفارش گزینه‌هایی مانند اطلاعاتی شخصی، آدرس مبدأ و مقصد، درخواست کارگر بارگیری، نوع پرداخت هزینه، مدت زمان توقف در محل، بازگشت دوباره به مبدأ قابل ویرایش هستند.',
      },
      {
        number: 1,
        id: 'request-2',
        img: movingRequest2,
        title: 'نمایش موقعیت لحظه‌ای اثاث کشی منزل یا شرکت',
        name: 'موقعیت اثاثیه',
        text:
          'در هر لحظه و از طریق اپلیکیشن اسنپ می‌توانید موقعیت مکانی اثاثیه را به صورت آنلاین مشاهده کنید. این ویژگی به شما کمک می‌کند تا بتوانید زمان رسیدن وسائل را پیش بینی کرده و از سلامت حمل و نقل اثاثیه اطمینان حاصل کنید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: movingRequest3,
        title: 'پیش‌بینی زمان اثاث کشی',
        name: 'پیش‌بینی زمان',
        text:
          'زمان استاندارد مشخص شده برای خدمات اسباب کشی و هر جابه‌جایی ۳ ساعت در نظر گرفته می‌شود. کاربران می‌توانند در صورت نیاز زمان حمل‎ونقل اثاثیه را در اپلیکیشن افزایش دهند.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'خدمات آنلاین اسباب کشی به جای روش‌های سنتی!',
        text:
          'روش‌های سنتی اسباب کشی و حمل بار به دو دلیل نمی‌توانند جوابگوی نیازهای جامعه باشند. دلیل اول اینکه پیدا کردن یک شرکت مطمئن و معتبر در نزدیکی محل سکونت بسیار زمان‌بَر است. دلیل دوم، بررسی کیفیت انجام خدمات نیز در هاله‌ای از ابهام است. در خدمات اسباب کشی اسنپ، همۀ امور مربوط به اسباب کشی به شکل مسنجم و شفاف انجام می‌پذیرند. قیمت‌ها مشخص و قبل از سفارش برای تایید به شما نمایش داده خواهد شد.',
      },
      { id: 2, type: 'img', source: movingtImg },
      {
        id: 3,
        title: 'امکان زمان بندی ثبت سفارش (رزرو)',
        text:
          'یکی از قابلیت‌های فوق العاده سرویس اسباب کشی اسنپ، امکان رزرو قبلی این خدمات است. شما می‌توانید در سوپراپ اسنپ، زمان حمل و نقل وسایل را از قبل برنامه ریزی کنید. این قابلیت به شما کمک می‌کند تا طبق برنامه زمانی خود پیش بروید و بتوانید در زمان خود تا حد ممکن صرفه جویی کنید.',
      },
      {
        id: 4,
        title: 'امکان اسباب کشی منزل‌ و محل کار',
        text:
          'اگر خانه جدیدی خریداری کرده‌اید یا می‌خواهید در سریع‌ترین زمان ممکن به شرکت جدید خود نقل مکان کنید، امکان حمل و نقل وسایل خانگی و اداری از طریق سوپراپ اسنپ امکان پذیر است. خدمات اسباب کشی اسنپ به شما کمک می‌کند بدون آنکه زمان خود را بیهوده صرف پیدا کردن اتوبارهای مختلف کنید، درکوتاه مدت امور مربوط به حمل و نقل اثاثیه منزل یا محل کارتان را در نهایت اطمینان و راحتی انجام دهید.',
      },
    ],
    color: '#06d170',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'خدمات اسباب کشی اسنپ شامل چه مواردی می‌شود؟',
      answer:
        'اسنپ کلیه خدمات حمل وسایل از داخل ملک را با استفاده از کامیونت‌های مخصوص انجام ‏می‌دهد. درخواست کارگر بارگیری و زمان رزرو سفارش نیز امکان پذیر است.‏',
    },
    {
      id: 1,
      active: false,
      title:
        'برای استفاده از سرویس اسباب کشی اسنپ نیاز به نصب اپلیکیشن دیگری است؟',
      answer:
        'خیر، کلیه فرآیند ثبت سفارش اسباب کشی توسط سوپر اپلیکیشن اسنپ انجام می‌شود.‏',
    },
    {
      id: 2,
      active: false,
      title: 'تعرفه خدمات اسباب کشی اسنپ چقدر است؟',
      answer:
        'قیمت گذاری در اسنپ کاملاً شفاف و ثابت است. قیمت دریافتی همان مبلغی است که در ثبت ‏سفارش انجام داده‌اید.‏',
    },
    {
      id: 3,
      active: false,
      title: 'استعلام قیمت از اپلیکیشن اسنپ چگونه است؟',
      answer:
        'شما می‌توانید از طریق وبسایت و اپلیکیشن اسنپ نسبت به استعلام قیمت اقدام کنید. شما با وارد ‏کردن اطلاعات شخصی و تعیین مبدأ و مقصد، قیمت نهایی فاکتور خود را مشاهده کنید.',
    },
    {
      id: 4,
      active: false,
      title: 'آیا سرویس اسباب کشی اسنپ خدمات بسته بندی دارد؟',
      answer: 'خیر، این سرویس تنها مسئولیت حمل و نقل بار را برعهده دارد.‏',
    },
  ]

  const dataFooter = {
    img: movingFooter,
    icon: moving,
    title: 'اطمینان و کارآیی بالا با سرویس اسباب کشی اسنپ',
    text:
      'هم‌اکنون خدمات اسباب کشی اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات حمل و نقل اثاثیه را با سوپر اپلیکیشن اسنپ تجربه کنید.',
    button: 'ثبت آنلاین حمل',
  }

  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Banner dataBanner={dataBanner} />
        <Section dataSection={dataSection} />
        <FrequentlyQuestion questionData={questionData} />
        <BannerFooter dataFooter={dataFooter} />
      </Layout>
    </div>
  )
}

export default MovingServices
