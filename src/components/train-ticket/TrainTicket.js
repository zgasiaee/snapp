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
import trainTicketSlider from './../../assets/img/train-ticket-slider.jpg'
import trainTicketSection from './../../assets/img/train-ticket-section.jpg'
import card1 from './../../assets/img/train-card-1.png'
import card2 from './../../assets/img/train-card-2.png'
import card3 from './../../assets/img/train-card-3.png'
import trainRequest1 from '../../assets/img/train-request-1.jpg'
import trainRequest2 from '../../assets/img/train-request-2.jpg'
import trainRequest3 from '../../assets/img/train-request-3.jpg'
import trainFooter from '../../assets/img/train-footer.jpg'
import train from '../../assets/img/train.png'

//video
import trainVideo from '../../assets/video/train-video.mp4'

const TrainTicket = () => {
  const dataSlider = {
    img: trainTicketSlider,
    title: 'خرید بلیط قطار اسنپ',
    text:
      'دیگر خبری از شلوغی خیابان و ترافیک جاده نیست! با سوپراپلیکیشن اسنپ خرید آنلاین بلیط قطار برای مسافرین عزیز ساده تر شده است. خدمات اسنپ به مسافران این امکان را می‌دهد که نوع بلیط و قطار مورد نظر خود را در منزل تهیه کنند.',
    buttonText: 'خرید بلیط قطار',
    showInput: false,
    color: '#ff4340',
  }

  const dataBanner = {
    img: trainTicketSection,
    title: 'مزایای خرید بلیط قطار از اسنپ‌',
    text:
      'اسنپ‌ با ارائه راهکارهای اساسی به دنبال ساده‌سازی و سرعت بخشیدن به جریان عادی زندگی مردم است.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'امکان رزرو و خرید سریع بلیط قطار',
        textCard:
          'هرجا که باشید با اتصال به اینترنت و از طریق سوپراپلیکیشن اسنپ به سرعت بلیط قطار خود را رزرو و تهیه کنید.‏',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'تنوع در نوع قطار و شرکت‌های ریلی',
        textCard:
          'هنگام خرید آنلاین بلیط می‌توانید نوع قطار و شرکت ریلی مورد نظر خود را برحسب تعداد نفرات و بودجه انتخاب کنید.‏',
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
        img: trainRequest1,
        title: 'نحوه رزرو بلیط قطار',
        name: 'رزرو بلیط',
        text:
          'وارد سوپراپ اسنپ شوید. گزینه «بلیت سفر» را انتخاب کنید. سپس چهار گزینه برای شما ظاهر می‌شوند. گزینه قطار را انتخاب کرده تا وارد صفحه خرید بلیط شوید. با مشخص کردن یک طرفه یا دو طرفه بودن سفر، مبدأ، مقصد و تاریخ سفر می‌توانید لیستی از شرکت‌های ریلی را با مشخصات مختلف مشاهده کنید. اکنون می‌توانید گزینه مورد نظر خود را انتخاب کنید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: trainRequest2,
        title: 'فیلترهای قابل انتخاب',
        name: 'انتخاب دقیق',
        text:
          '‏بعد از مشاهده لیست شرکت‌های ریلی، فیلترهای ارزان‌ترین، گران‌ترین و بیشترین تخفیف، زودترین و دیرترین قطار برای ‏شما نمایش داده می‌شوند. این فیلترها برای افزایش راحتی شما در جستجوی بلیط طراحی شده‌اند.‏',
      },
      {
        number: 2,
        id: 'request-3',
        img: trainRequest3,
        title: 'قوانین استرداد بلیط قطار',
        name: 'استرداد بلیط',
        text:
          'بعد از انتخاب گزینه مورد نظر خود، اکنون وارد صفحه‌ای می‌شوید که قوانین و شرایط کنسلی بلیط وجود دارد. شرکت‌های ‏ریلی قوانینی مختص به خود را دارند و لازم است شما با مطالعه این قوانین، در خرید بلیط آنلاین آگاهانه تصمیم بگیرید.‏',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'تنوع بسیار در انتخاب نوع قطار',
        text:
          'در سوپراپلیکیشن اسنپ انواع بلیط قطار از جمله لوکس، درجه یک، درجه دو و سالنی ارائه می‌شوند. مسافران می‌توانند برحسب نیاز بلیط کوپه دربست را انتخاب کنند تا حداکثر راحتی را برای خانواده خود فراهم کنند و در هزینه‌های خود صرفه جویی کنند. همچنین، امکان انتخاب نوع سالن برحسب برادران، خواهران و عادی نیز وجود دارد.',
      },
      { id: 2, type: 'video', source: trainVideo },
      {
        id: 3,
        title: 'دسترسی به شرکت‌های ریلی برتر کشور',
        text:
          'قطارهای شرکت رجا گزینه‌های مختلفی را براساس امکانات، خدمات و کیفیت در اختیار مسافران قرار می‌دهند. قطارهای این شرکت ریلی به انواع چهار تخته، شش تخته، سالنی و مجلل تقسیم می‌شوند. شرکت ریلی معتبر دیگر سفیر نام دارد که شرکت‌های زیادی از جمله بن‌ریل، جوپار، ریل سیر کوثر، مهتاب سیر جم، رعد تبریز، پارس لاریم و نور از زیرمجموعه‌های آن هستند.',
      },
      {
        id: 4,
        title: 'خرید بلیط ارزان با تخفیف‌های ویژه',
        text:
          'خرید بلیط قطار از اسنپ‌ ارزان‌ترین انتخاب شماست. شما می‌توانید در بیشتر روزهای سال از قیمت باورنکردنی و تخفیف‌های ویژه‌ای بهره مند شوید. به ویژه اگر مدام در حال سفر با قطار هستید، قیمت‌های ارزان و تخفیف‌های هیجان انگیز این امکان را به شما می‌دهند تا بتوانید در هزینه‌های خود صرفه جویی کنید.',
      },
    ],
    color: '#ff4340',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: '‏بعد از خرید اینترنتی بلیط قطار چطور بلیط را دریافت کنم؟',
      answer:
        'اسنپ شماره بلیط و مشخصات قطار و سفرتان را از طریق پیامک و ایمیل و در قالب یک فایل ‏PDF‏ برای شما ارسال می‌کند. شما ‏قبل از حرکت قطار باید به راه آهن مراجعه کرده و با اعلام شماره بلیط، بلیط کاغذی‌تان را دریافت کنید.‏‏',
    },
    {
      id: 1,
      active: false,
      title: 'در راه آهن و هنگام سوار شدن به قطار چه مدارکی نیاز است؟',
      answer: 'برای ورود به قطار پرینت بلیط و کارت شناسایی معتبر الزامی است.‏‏',
    },
    {
      id: 2,
      active: false,
      title: '‏هزینه صدور بلیط قطار برای کودکان چقدر است؟',
      answer:
        'قیمت بلیط کودکان نیم‌بها و برای نوزادان 10 درصد مبلغ بلیط بزرگسالان است.‏‏',
    },
    {
      id: 3,
      active: false,
      title: 'مقدار بار مجاز در قطار چقدر است؟',
      answer:
        'حجم بار نباید از ابعاد 75 سانتی‌متر و وزن 30 كیلوگرم بیشتر باشد.‏',
    },
    {
      id: 4,
      active: false,
      title: 'شرایط کنسل کردن و استرداد بلیط قطار چگونه است؟',
      answer:
        'میزان جریمه کنسلی مطابق با قوانین شرکت راه آهن تنظیم شده است. تا ساعت ۱۲ روز قبل از حرکت شامل 10 درصد جریمه ‏است. از ساعت ۱۲ روز قبل از حرکت تا سه ساعت قبل از حرکت قطار شامل 30 درصد جریمه است. از سه ساعت مانده به ‏حرکت قطار تا لحظه حرکت قطار شامل ۵۰ درصد جریمه کنسلی است. استرداد بلیط پس از حرکت قطار وجود ندارد و هیچ ‏هزینه‌ای به مسافر برگردانده نمی‌شود.‏',
    },
    {
      id: 5,
      active: false,
      title: '‏در یک کوپه دربست چند نفر همراه اضافه می‌توان برد؟',
      answer:
        'فقط یک مسافر اضافه بر نفرات خود می‌توانید در یک کوپه دربست همراه خود ببرید. البته وجه کامل بلیط در قطار از ایشان ‏دریافت می‌شود و فقط هم اجازه ماندن در همان کوپه را دارد.‏',
    },
  ]

  const dataFooter = {
    img: trainFooter,
    icon: train,
    title: 'خرید مطمئن بلیط قطار با اسنپ‌‏',
    text:
      'هم‌اکنون خدمات فروش بلیط قطار، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن اسنپ به راحتی در دسترس شماست. سیر و سفر را با خدمات گردشگری اسنپ تجربه کنید.',
    button: 'خرید بلیط قطار',
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

export default TrainTicket