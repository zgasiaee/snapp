import React from 'react'

//component
import Slider from '../slider/Slider'
import IconBar from '../iconBar/IconBar'
import Banner from '../banner/Banner'
import Section from '../shared/section/Section'
import BannerFooter from '../shared/banner-footer/BannerFooter'
import Article from '../shared/article/Article'
import Layout from '../shared/Layout'

//image
import confectionerySlider from './../../assets/img/confectionery-slider.jpg'
import confectionerySection from './../../assets/img/confectionery-section.jpg'
import card1 from './../../assets/img/confectionery-card-1.png'
import card2 from './../../assets/img/confectionery-card-2.png'
import card3 from './../../assets/img/confectionery-card-3.png'
import confectioneryRequest1 from '../../assets/img/confectionery-request-1.jpg'
import confectioneryRequest2 from '../../assets/img/confectionery-request-2.jpg'
import confectioneryRequest3 from '../../assets/img/confectionery-request-3.jpg'
import confectioneryFooter from '../../assets/img/confectionery-footer.jpg'
import food from '../../assets/img/food.svg'
import bb from '../../assets/img/bb.png'
import cream from '../../assets/img/cream.png'
import fest from '../../assets/img/fest.png'
import nakhlak from '../../assets/img/nakhlak.png'
import nateli from '../../assets/img/nateli.png'
import poopak from '../../assets/img/poopak.png'
import sahar from '../../assets/img/sahar.png'
import tina from '../../assets/img/tina.png'

const Confectionery = () => {
  const dataSlider = {
    img: confectionerySlider,
    title: 'خرید کیک و شیرینی تازه',
    text:
      'فرقی نمی‌کند که مهمان سرزده سر رسیده است یا عصر شده و هوس شیرینی خوشمزه با چای یا قهوه کرده‌اید. شاید هم جشن تولد در پیش دارید و فرصت خرید حضوری کیک تولد ندارید. سفارش آنلاین کیک و شیرینی بهترین انتخاب است. تلفن همراه‌تان را بردارید و با مرور شیرینی‌فروشی‌‌های متنوع در اپلیکیشن اسنپ، سفارش دلخواهتان را انتخاب کنید و در زودترین زمان ممکن درب منزل تحویل بگیرید.',
    buttonText: 'سفارش دهید',
    showInput: false,
    color: '#ff00a6',
  }

  const dataBanner = {
    img: confectionerySection,
    title: 'مزایای سفارش کیک و شیرینی با اسنپ',
    text:
      'با سفارش کیک و شیرینی از اسنپ می‌توانید:در آنِ واحد، محصولات مختلف چندین قنادی را ببینید.با استفاده از فیلترهای ارزان‌ترین، گران‌ترین، محبوب‌ترین و...، فروشگاه دلخواه‌تان را پیدا کنید.از نظرات و امتیازاتی که مشتریان قبلی به هر فروشگاه داده‌اند، کمک بگیرید.به‌صرفه، سریع و با تخفیف خرید کنید.بدون معطلی، سفارشتان را در محل دلخواهتان با بسته‌بندی مناسب تحویل بگیرید. ',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'خرید از بهترین شیرینی ‌فروشی‌ها',
        textCard:
          'از معتبرترین شیرینی‌فروشی‌ها، با استفاده از نظرات مشتریان قبلی، خرید کنید.',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'سفارش انواع شیرینی‌ تازه',
        textCard:
          'انواع کیک و شیرینی خشک، تر، رژیمی، تارت، دسر و ... را تازه و باکیفیت سفارش دهید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'صرفه‌جویی در زمان',
        textCard:
          'در منزل یا محل کار، بدون نیاز به مراجعه حضوری، سفارش را سریع و با بسته‌بندی مناسب تحویل بگیرید.',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: confectioneryRequest1,
        title: 'خرید از شیرینی‌فروشی دلخواه',
        name: 'انتخاب شیرینی‌فروشی',
        text:
          'امکان سفارش کیک و شیرینی از فروشگاه‌های متنوع و پرشمار وجود دارد. دست‌تان برای انتخاب باز است. کدام قنادی در دسترس را ترجیح می‌دهید؟ با نگاهی به انواع فیلترهای ارزان‌ترین، گران‌ترین، پرفروش‌ترین و...، انتخاب ساده‌تر می‌شود. شاید هم دنبال شیرینی خاصی هستید. جست‌وجو کنید و به‌سادگی سفارش دهید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: confectioneryRequest2,
        title: 'قابلیت دریافت حضوری سفارش',
        name: 'قابلیت دریافت حضوری',
        text:
          'علاوه بر امکان ارسال سفارش درب منزل، امکان خرید آنلاین و دریافت حضوری هم برای شما فراهم است. آنلاین سفارش بدهید و محصول را حضوری تحویل بگیرید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: confectioneryRequest3,
        title: 'سفارش براساس سلیقه و انتخاب شما',
        name: 'آماده‌سازی سفارش با سلیقه شما',
        text:
          'اگر توضیح خاصی درباره تهیه و بسته‌بندی سفارشتان دارید، آن را در هنگام ثبت درخواست بنویسید؛ مثلا اینکه روی کیک تولد چه جمله‌ای نوشته شود.',
      },
    ],
    dataCard: [],
    color: '#ff00a6',
  }

  const dataFooter = {
    img: confectioneryFooter,
    icon: food,
    title: 'خرید کیک و شیرینی تازه',
    text:
      'هوس کیک و شیرینی کرده‌اید؟ برای مهمانی یا جشن تولد پیش‌ِرو باید کیک و شیرینی سفارش بدهید؟ با سفارش آنلاین، به‌ساده‌ترین شکل ممکن بهترین خرید را خواهید داشت. از میان فروشگاه‌های دلخواه و باکیفیت، گزینه مناسب را انتخاب کنید و با تأیید سفارش، آن را درب منزل یا محل موردنظرتان تحویل بگیرید. با اپلیکیشن اسنپ، کیک و شیرینی باکیفیت و موردنظرتان در کوتاه‌ترین زمان ممکن به دست‌تان می‌رسد.',
    button: 'سفارش دهید',
  }

  const articleData = {
    items: [
      { id: 0, img: nakhlak },
      { id: 1, img: sahar },
      { id: 2, img: bb },
      { id: 3, img: fest },
      { id: 4, img: nateli },
      { id: 5, img: cream },
      { id: 6, img: tina },
      { id: 7, img: poopak },
    ],
    title: 'پرطرفدارترین شیرینی‌فروشی‌ها',
    cards: [
      {
        id: 0,
        bgc: '#ffffff',
        title: '',
        text:
          'مجموعه‌ای از بهترین و مشهورترین شیرینی‌فروشی‌ها در اپلیکیشن اسنپ حضور دارند. با سفارش از میان برندهای معروفی مانند تخلک و نان سحر می‌توانید کیک‌ها، نان‌های شیرین و حجیم و شیرینی‌های باکیفیت دیگر را سفارش بدهید. سفارش از برندهای باسابقه‌ای مانند شیرینی بی‌بی و نون‌خامه‌ای هم در اپلیکیشن اسنپ مقدور است.حضور قنادی‌های پرآوازه‌ای مانند ناتلی و پوپک هم کاربران زیادی را به‌سمت خرید آنلاین کیک و شیرینی دعوت می‌کند. دسترسی به محصولات بسیاری از محبوب‌ترین‌ فروشگاه‌های شهر مانند شیرینی جشنواره یا تینا در اپلیکیشن، خیال کاربران را بابت تهیه کیک‌های تولد و شیرینی‌های مراسم‌های مختلف راحت می‌کند.',
      },
      {
        id: 1,
        bgc: '#f5f5f6',
        title: 'چرا کیک و شیرینی همیشه پرطرفدار است؟',
        text:
          'کیک‌ها و شیرینی‌ها فقط خوراکی‌هایی خوشمزه برای شیرین‌کردن کام نیستند. این خوشمزه‌جات دوست‌داشتنی تنوع بی‌نظیری در نقاط مختلف دنیا دارند و نشانه رسوم و سنت‌ها و یادآور مراسم و موقعیت‌های مختلف هم هستند. شیرینی‌ها و کیک‌ها بیشتر در مراسم‌های شاد و موقعیت‌های خوشحال‌کننده مصرف می‌شوند اما ردپایی از آنها در عزاداری‌ها هم دیده می‌شود.در واقع، این خوراکی‌های محبوب یار و یاور ما در روزهای شیرین و تلخ هستند. مروری بر تاریخچه شیرینی‌ها و کیک‌ها نشان می‌دهد که هرچند از گذشته‌ها در نقاط مختلف دنیا تهیه می‌شده‌اند اما نوع مدرن‌شان بیشتر خاستگاهی اروپایی دارد. کیک‌های امروزی با بافت سبک و اسفنج‌مانند از حوالی قرن هجدهم میلادی تهیه می‌شده‌اند.',
      },
      {
        id: 2,
        bgc: '#ffffff',
        title: 'از شیرینی‌های سنتی و محلی ایران چه می‌دانیم؟ ',
        text:
          'ایرانی‌ها هم از گذشته‌های دور تاکنون در تهیه شیرینی‌های مختلف دستی بر آتش داشته‌اند. به هر شهر و روستایی از ایران که سر بزنید، شیرینی‌های سنتی و محلی مختلفی می‌بینید که نشان از هنر مردم آن دیار در اختراع طعم‌های خوشمزه با به‌کارگیری مواد در دسترس دارد. شیرینی‌های محلی و سنتی ایرانی بسیار متنوع‌اند، برای مثال:باسلوق؛باقلوا؛بامیه؛حلوا؛',
      },
    ],
  }
  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Banner dataBanner={dataBanner} />
        <Section dataSection={dataSection} />
        <Article articleData={articleData} />
        <BannerFooter dataFooter={dataFooter} />
      </Layout>
    </div>
  )
}

export default Confectionery
