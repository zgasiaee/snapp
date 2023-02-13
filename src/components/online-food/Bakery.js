import React from 'react'

//component
import Slider from '../slider/Slider'
import IconBar from '../iconBar/IconBar'
import Banner from '../banner/Banner'
import Section from '../shared/section/Section'
import BannerFooter from '../shared/banner-footer/BannerFooter'
import Categories from '../shared/categories/Categories'
import Article from '../shared/article/Article'
import Layout from '../shared/Layout'

//image
import bakerySlider from './../../assets/img/bakery-slider.jpg'
import bakerySection from './../../assets/img/bakery-section.jpg'
import card1 from './../../assets/img/bakery-card-1.png'
import card2 from './../../assets/img/bakery-card-2.png'
import card3 from './../../assets/img/bakery-card-3.png'
import bakeryRequest1 from '../../assets/img/bakery-request-1.jpg'
import bakeryRequest2 from '../../assets/img/bakery-request-2.jpg'
import bakeryRequest3 from '../../assets/img/bakery-request-3.jpg'
import bakeryFooter from '../../assets/img/bakery-footer.jpg'
import food from '../../assets/img/food.svg'
import barbari from '../../assets/img/barbari.jpg'
import lavash from '../../assets/img/lavash.jpg'
import sangak from '../../assets/img/sangak.jpg'
import taftoon from '../../assets/img/taftoon.jpg'

//video
import bakeryVideo from '../../assets/video/bakery.mp4'

const Bakery = () => {
  const dataSlider = {
    img: bakerySlider,
    title: 'خرید آنلاین نان از اسنپ',
    text:
      'خرید نان تازه برای خیلی‌ها آسان نیست چون فرصت رفتن به نانوایی و ایستادن در صف را ندارند. اسنپ این مشکل را حل کرده و نان داغ را خیلی زود درب منزل‌تان با بسته‌بندی حرفه‌ای تحویل می‌دهد. هر نانی را با تعداد دلخواه سفارش دهید تا جای نان بربری و سنگک داغ یا تافتون و لواش تازه یا نان فانتزی سر سفره‌تان خالی نباشد.',
    buttonText: 'سفارش نان تازه',
    showInput: false,
    color: '#ff00a6',
  }

  const dataBanner = {
    img: bakerySection,
    title: 'مزایای سفارش آنلاین نان با اسنپ',
    text:
      'با اسنپ نان داغ را از نانوایی‌های اطراف‌تان سفارش می‌دهید و بی‌‌معطلی در صف، درب منزل تحویل می‌گیرید. انواع نان (سنگک، بربری، لواش، تافتون و فانتزی) و نظرات کاربران را ببینید و با کدهای تخفیف اسنپ (در باشگاه مشتریان) ارزان‌تر بخرید. علاوه بر پرداخت آنلاین می‌توانید با استفاده از سرویس اعتباری در پایان ماه تسویه‌حساب کنید.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'صرفه‌جویی در زمان',
        textCard: 'بدون ایستادن در صف و معطلی، نان تازه را به ‌سفره بیاورید.',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'لذت همیشگی نان تازه',
        textCard: 'خرید که آسان باشد، هر روز می‌توانید نان تازه میل کنید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'نان مطابق ذائقه شما',
        textCard: 'اسنپ هر نوع نانی را که بخواهید برایتان تهیه می‌کند.',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: bakeryRequest1,
        title: 'نحوه انتخاب نانوایی موردنظر',
        name: 'انتخاب نانوایی',
        text:
          'وارد سوپراپلیکیشن اسنپ شوید و گزینه «غذا» را انتخاب کنید. بعد از واردکردن نشانی‌تان، از میان نانوایی‌های اطراف گزینه دلخواه را انتخاب کنید و نان موردنظرتان را به تعداد لازم سفارش بدهید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: bakeryRequest2,
        title: 'درج توضیحات و انتخاب بسته‌بندی',
        name: 'شخصی‌سازی سفارش',
        text:
          'توضیحات موردنظرتان درباره نحوه سفارش (مثل کنجدی یا ساده بودن و یا نرم یا خشک بودن نان) را بنویسید و بسته‌بندی موردنظرتان را هم انتخاب کنید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: bakeryRequest3,
        title: 'نحوه نهایی‌کردن سفارش',
        name: 'تأیید سفارش و پرداخت',
        text:
          'سفارش‌تان را بررسی و تأیید کنید و هزینه را آنلاین یا با سرویس اعتباری بپردازید. اگر کد تخفیف دارید، در این مرحله وارد کنید',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'نان سنگک',
        text:
          'صبح‌ها نان و پنیر محلی با سنگک تازه می‌چسبد و ظهرها آبگوشتی که خوردنش همیشه لذت‌بخش است. صبر کنید! لازم نیست به نانوایی بروید. از اسنپ نان سنگک سفارش بدهید.',
      },
      { id: 2, type: 'video', source: bakeryVideo },
      {
        id: 3,
        title: 'نان بربری',
        text:
          'بعضی‌ها بربری را برای صبحانه می‌پسندند و بعضی هم عاشق همراهی آن با انواع غذاها هستند. در هر حال، اسنپ نمی‌گذارد که بی ‌بربری بمانید!',
      },
      {
        id: 4,
        title: 'نان لواش',
        text:
          'طرف‌داران نان لواش تازه هم کم نیستند! یک نان اقتصادی، همه‌پسند و به‌صرفه. اگر هم هر روز قصد سفارش نان ندارید، از اسنپ لواش بخرید. این نان سفره‌تان را تا چند روز همراهی می‌کند',
      },
      {
        id: 5,
        title: 'نان تافتون',
        text:
          'برای سفارش نان کامل با آرد سبوس‌دار و استفاده از خواص بی‌نظیرش، از اسنپ نان تافتون سفارش بدهید.',
      },
      {
        id: 6,
        title: 'نان فانتزی',
        text:
          'برای ساندویچ صبحانه یا میان‌وعده عصر و غذاهای شبانه، نان‌های فانتزی تازه را فراموش نکنید. بهترین نان‌های فانتزی را از فروشگاه‌های معتبر در اسنپ بخرید.',
      },
    ],
    color: '#ff00a6',
  }

  const dataFooter = {
    img: bakeryFooter,
    icon: food,
    title: 'سفارش نان تازه',
    text:
      'با اسنپ می‌توانید نان تازه بخرید، بی‌معطلی آن را در بسته‌بندی مناسب درب منزل تحویل بگیرید و از همه جالب‌تر، امتیازاتی در باشگاه مشتریان برای خود ثبت کنید. لحظه‌ها و ثانیه‌هایتان را با انتخاب‌های هوشمندانه و استفاده از خدمات خوشایند، راحت‌تر و شیرین‌تر بگذرانید.',
    button: 'سفارش نان تازه',
  }

  const categoriesData = {
    data: [
      { id: 0, name: 'نان سنگک', img: sangak },
      { id: 1, name: 'نان بربری', img: barbari },
      { id: 2, name: 'نان لواش', img: lavash },
      { id: 3, name: 'نان تافتون', img: taftoon },
    ],
    bgc: '#ffffff',
    title: '',
    width: '170px',
    height: '110px',
    cardBgc: '#ffffff',
  }

  const articleData = {
    items: [],
    title: '',
    cards: [
      {
        id: 0,
        bgc: '#ffffff',
        title: 'انتخاب بهترین نانوایی',
        text:
          'با اسنپ برای خرید نان حق انتخاب خواهید داشت. چه‌چیزی از این بهتر که نانوایی نمونه را از میان فروشگاه‌های اطراف‌تان با دقت و براساس نظرات کاربران انتخاب کنید؟ بنا به موقعیت مکانی‌تان، نانوایی مناسبی را برای سفارش آنلاین نان انتخاب کنید که هم محصولاتش درمیان مشتریان پرطرفدارند و هم زود و سریع، نان را درب منزل به دست‌تان می‌رساند. بسته‌بندی نان را در هنگام سفارش خودتان انتخاب کنید و اگر توضیحی هم دارید در هنگام ثبت سفارش در اپلیکیشن درج کنید. با اسنپ می‌توانید نگاهی به قیمت نان‌های مختلف داشته باشید و بعد از هر خرید هم امتیازاتی بگیرید که در قالب کدهای تخفیف یا برای شرکت در قرعه‌کشی‌های این سوپراپلیکیشن به کارتان می‌آیند.',
      },
    ],
  }

  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Categories categoriesData={categoriesData} />
        <Banner dataBanner={dataBanner} />
        <Section dataSection={dataSection} />
        <Article articleData={articleData} />
        <BannerFooter dataFooter={dataFooter} />
      </Layout>
    </div>
  )
}

export default Bakery
