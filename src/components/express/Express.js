import React from 'react'

//component
import Slider from '../slider/Slider'
import IconBar from '../iconBar/IconBar'
import Banner from '../banner/Banner'
import Section from '../shared/section/Section'
import FrequentlyQuestion from '../shared/frequently-question/FrequentlyQuestion'
import BannerFooter from '../shared/banner-footer/BannerFooter'
import Categories from '../shared/categories/Categories'
import Layout from '../shared/Layout'

//image
import expressSlider from './../../assets/img/express-slider.jpg'
import expressSection from './../../assets/img/express-section.jpg'
import card1 from './../../assets/img/express-card-1.png'
import card2 from './../../assets/img/express-card-2.png'
import card3 from './../../assets/img/express-card-3.png'
import expressRequest1 from '../../assets/img/express-request-1.jpg'
import expressRequest2 from '../../assets/img/express-request-2.jpg'
import expressRequest3 from '../../assets/img/express-request-3.jpg'
import expressImg from '../../assets/img/express-img.jpg'
import expressFooter from '../../assets/img/express-footer.jpg'
import tanagholat from '../../assets/img/tanagholat.jpg'
import labanyat from '../../assets/img/labanyat.jpg'
import noshidani from '../../assets/img/noshidani.jpg'
import kharbar from '../../assets/img/kharbar.jpg'
import arayeshi from '../../assets/img/arayeshi.jpg'
import konserv from '../../assets/img/konserv.jpg'
import protein from '../../assets/img/protein.jpg'
import ashpazkhane from '../../assets/img/ashpazkhane.jpg'
import chashni from '../../assets/img/chashni.jpg'
import shirini from '../../assets/img/shirini.jpg'
import ajil from '../../assets/img/ajil.jpg'
import edari from '../../assets/img/edari.jpg'

const Express = () => {
  const dataSlider = {
    img: expressSlider,
    title: 'اسنپ اکسپرس تحویل کمتر از ۳۰ دقیقه',
    text:
      'دیگر برای خریدهای روزمره نیاز نیست به فروشگاه محله بروید. با سرویس تحویل فوری اسنپ اکسپرس، انواع محصولات و خواربار را از فروشگاه‌های اطراف‌تان سفارش دهید و کمتر از ۳۰ دقیقه، درب منزل با بسته‌بندی مناسب تحویل بگیرید.',
    buttonText: 'خرید با تحویل فوری',
    showInput: false,
    color: '#ff661f',
  }

  const dataBanner = {
    img: expressSection,
    title: 'مزایای استفاده از سرویس اسنپ اکسپرس',
    text: `تیم حرفه‌ای اسنپ با شناخت نیازها و خواسته‌های شما مشتریان عزیز، سعی می‌کند که بهترین خدمات را در اختیارتان قرار بدهد. استفاده از سرویس اسنپ اکسپرس یعنی:
      • دسترسی به فروشگاه‌های زنجیره‌ای (هایپراستار، جانبو، رفاه، گندم، حیات‌مارکت و…) و سوپرمارکت‌های محلی
      • تحویل سفارش در کمتر از ۳۰ دقیقه
      • امکان مقایسه قیمت کالاها
      • امکان خرید انواع تنقلات، نوشیدنی‌ها، لبنیات، محصولات پروتئینی، خواربار و نان و غیره به‌صورت آنلاین
      • پشتیبانی ۲۴ساعته`,
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'تحویل فوری',
        textCard:
          'با حوصله و آرامش، کالای سوپرمارکتی موردنظرتان را در بین فروشگاه‌های اطرافتان پیدا کنید، نظرات کاربران را بخوانید و قیمت‌ها را مقایسه کنید. بعد از خرید، محصول موردنظرتان در کمتر از ۳۰ دقیقه درب منزل شماست!',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'تنوع محصول',
        textCard:
          'انواع محصولات متنوع در دسترس شماست. کافی است گشت‌وگذاری آنلاین در میان محصولات متنوع در فروشگاه‌های مختلف داشته باشید تا به انتخاب نهایی موردنظرتان برسید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'خرید اعتباری',
        textCard:
          'همه این‌ها زمانی جذاب‌تر می‌شود که بدانید امکان تسویه سر ماه هم وجود دارد. بسته به میزان اعتبارتان، خرید کنید و آخر ماه، هزینه‌اش را بپردازید. البته سقف خرید برای هر کاربر متفاوت است.',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: expressRequest1,
        title: 'ثبت سفارش در اسنپ اکسپرس',
        name: 'ثبت سفارش',
        text:
          'برای ثبت سفارش‌، شماره همراه‌تان را در کادر بالای این صفحه وارد کنید یا وارد اپلیکیشن اسنپ شوید. به بخش سوپرمارکت بروید، آدرستان را وارد کنید و با انتخاب هرکدام از فروشگاه‌های محلی یا زنجیره‌ای نزدیک‌تان، از دسته‌بندی‌های مختلف محصولات خرید کنید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: expressRequest2,
        title: 'پرداخت آنلاین',
        name: 'پرداخت',
        text:
          'بعد از انتخاب محصولات موردنظرتان، گزینه تکمیل خرید را بزنید تا صورت‌حساب را ببینید. در این بخش می‌توانید یا آنلاین پرداخت کنید یا اعتباری. با انتخاب روش پرداخت، خریدتان نهایی می‌شود و تمام!',
      },
      {
        number: 2,
        id: 'request-3',
        img: expressRequest3,
        title: 'زمان تحویل',
        name: 'زمان تحویل',
        text:
          'با اسنپ اکسپرس، سفارشتان را کمتر از ۳۰ دقیقه، درب منزل یا محل کار تحویل بگیرید. فروشگاه‌ها تا زمانی که باز باشند، در اپلیکیشن هم فعال‌اند.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'گوش‌به‌زنگ تخفیف نارنجی باشید!',
        text:
          'در اسنپ اکسپرس، بعضی از محصولات تخفیف خورده‌اند و شما می‌توانید آنها را پایین‌تر از قیمت بازار بخرید. از این مهم‌تر، از تخفیف نارنجی هم غافل نشوید؛ یعنی تخفیف‌های هیجان‌انگیزی که در بازه‌های زمانی خاص و با تعداد محدود، به کاربران هدیه می‌شوند.',
      },
      { id: 2, type: 'img', source: expressImg },
      {
        id: 3,
        title: 'دسترسی به اسنپ اکسپرس در نقاط مختلف ایران',
        text:
          'خرید اینترنتی از اسنپ اکسپرس در شهرهای مختلف کشور فعال است. اهالی شهرهای تهران، مشهد، تبریز، شیراز، اصفهان، سمنان، قم و… می‌توانند به‌سادگی از این سرویس استفاده کنند.',
      },
      {
        id: 4,
        title: 'لذت یک خرید سریع و به‌صرفه',
        text:
          'خرید خوب خریدی است که وقت‌تان را نگیرد، تنوع و انتخاب‌های مختلف برایتان فراهم کند و با تخفیف‌هایش کمک کند که محصولات موردنظرتان را به‌صرفه‌تر بخرید. خرید با  snapp expressتمام این ویژگی‌ها را دارد. با دسترسی به انواع کالاها و تخفیف‌ها هم در زمان صرفه‌جویی کنید و هم هوای جیب و بودجه‌تان را داشته باشید. تا چای‌تان را دم کنید، پیک اسنپ درب منزل شماست!',
      },
    ],
    color: '#ff661f',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'خرید آنلاین از اسنپ اکسپرس چه مزایایی دارد؟',
      answer:
        'با استفاده از اسنپ اکسپرس همیشه به سریع‌ترین شکل ممکن خرید خواهید کرد، زیرا این برنامه نزدیک‌ترین سوپرمارکت‌ها محلی و فروشگاه‌های زنجیره ای متعدد مانند هایپراستار، جانبو، رفاه، هایپر فامیلی، گندم و حیات مارکت به شما را پیدا می‌کند تا در کمترین زمان، خریدهایتان جلوی درب منزل به دست‌تان برسد. همچنین در قسمتی از برنامه نیز می‌توانید تخفیف‌های شگفت انگیز اجناس را (در بخش تخفیف نارنجی) مشاهده کرده و با قیمت بسیار مناسب خرید کنید.',
    },
    {
      id: 1,
      active: false,
      title: 'چگونه می‌توانم اپلیکیشن اسنپ اکسپرس را نصب کنم؟',
      answer:
        'در حال حاضر اپلیکیشن اسنپ اکسپرس برای تلفن‌های همراه اندرویدی در دسترس است و شما می‌توانید از طریق پلی استور، کافه بازار یا مایکت اپلیکیشن را دانلود و نصب کنید.',
    },
    {
      id: 2,
      active: false,
      title: 'زمان ثبت سفارش باید چه اطلاعاتی را وارد کنم؟',
      answer:
        'در صورتی که ثبت نام نکرده یا وارد سیستم نشده باشید، پس از تکمیل سبد خرید، دکمه ورود/عضویت را زده و با شماره همراه خود اقدام به تکمیل سفارش نمایید.',
    },
    {
      id: 3,
      active: false,
      title: 'چطور می‌توانم آدرس خود را ثبت کنم؟',
      answer:
        'پس از ورود به برنامه اسنپ اکسپرس، خیلی سریع مکان فعلی شما به صورت خودکار ثبت می‌گردد تا برنامه بتواند نزدیک‌ترین سوپرمارکت‌ها را برای شما شناسایی نماید. پس از ثبت مکان، کالا های جستجو شده‌ی شما به صورت دسته بندی شده از همه ی فروشگاه‌های نزدیک جستجو می گردد و قیمت آنها به شما نشان داده می شود تا بتوانید خریدی راحت و با قیمت به‌صرفه داشته باشید.',
    },
    {
      id: 4,
      active: false,
      title: 'چطور می‌توانم سفارشم را ثبت کنم؟',
      answer:
        'با استفاده از وب‌سایت یا اپلیکیشن اسنپ اکسپرس می‌توانید سفارش خود را ثبت کنید.کافیست وارد وب‌سایت یا اپلیکیشن شوید و کالا یا فروشگاه مورد نظر خود را جستجو کنید؛ با انتخاب و افزودن محصولات به سبد خرید می‌توانید خرید خود را پرداخت و سفارش‌تان را نهایی کنید.',
    },
    {
      id: 5,
      active: false,
      title: 'هزینه ارسال چقدر است؟',
      answer:
        'هزینه ارسال بسته به فاصله فروشگاه تا موقعیت فعلی شما متفاوت است.',
    },
  ]

  const dataFooter = {
    img: expressFooter,
    title: 'اسنپ اکسپرس تحویل کمتر از ۳۰ دقیقه',
    text:
      'لازم نیست که برای خریدهای روزمره شال ‌وکلاه کنید و روانه فروشگاه محله شوید. اسنپ اکسپرس راهی سریع و ساده برای خریدکردن است. فرقی نمی‌کند که لبنیات می‌خواهید یا تنقلات یا میوه یا محصولات بهداشتی؛ با اسنپ اکسپرس، انواع محصولات و خواربار را از فروشگاه‌های اطراف‌تان سفارش دهید و کمتر از ۳۰ دقیقه، درب منزل با بسته‌بندی مناسب تحویل بگیرید. خبر خوب اینکه امکان خرید اعتباری و تخفیف‌های دوره‌ای هم برای شما فراهم است!',
    button: 'خرید با تحویل فوری',
  }

  const categoriesData = {
    data: [
      { id: 0, name: 'تنقلات', img: tanagholat },
      { id: 1, name: 'لبنیات و بستنی', img: labanyat },
      { id: 2, name: 'نوشیدنی', img: noshidani },
      { id: 3, name: 'خواروبار و انواع نان', img: kharbar },
      { id: 4, name: 'آرایشی و بهداشتی', img: arayeshi },
      { id: 5, name: 'کنسرو و غذای آماده', img: konserv },
      { id: 6, name: 'پروتئین و تخم‌مرغ', img: protein },
      { id: 7, name: 'خانه و آشپزخانه', img: ashpazkhane },
      { id: 8, name: 'چاشنی و افزودنی غذا', img: chashni },
      { id: 9, name: 'شیرینی و دسر', img: shirini },
      { id: 10, name: 'آجیل و خشکبار', img: ajil },
      { id: 11, name: 'اداری و نوشت‌افزار', img: edari },
    ],
    bgc: '#ffffff',
    title: 'دسته‌بندی محصولات',
    width: '180px',
    height: '130px',
    cardBgc: '#ffffff',
  }

  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Categories categoriesData={categoriesData} />
        <Banner dataBanner={dataBanner} />
        <Section dataSection={dataSection} />
        <FrequentlyQuestion questionData={questionData} />
        <BannerFooter dataFooter={dataFooter} />
      </Layout>
    </div>
  )
}

export default Express
