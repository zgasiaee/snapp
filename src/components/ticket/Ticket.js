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
import ticketSlider from './../../assets/img/ticket-slider.jpg'
import ticketSection from './../../assets/img/ticket-section.jpg'
import card1 from './../../assets/img/ticket-card-1.png'
import card2 from './../../assets/img/ticket-card-2.png'
import card3 from './../../assets/img/ticket-card-3.png'
import ticketRequest1 from '../../assets/img/ticket-request-1.jpg'
import ticketRequest2 from '../../assets/img/ticket-request-2.jpg'
import ticketRequest3 from '../../assets/img/ticket-request-3.jpg'
import ticketFooter from '../../assets/img/ticket-footer.jpg'
import ticket from '../../assets/img/ticket-icon.svg'

const Ticket = () => {
  const dataSlider = {
    img: ticketSlider,
    title: 'خرید آنلاین بلیط با اسنپ تیکت',
    text:
      'استخر یا سینما؟ موزه‌ یا تفریحات کودکان؟ زیپ‌لاین یا کنسرت؟ تئاتر یا بانجی ‌جامپینگ؟ برای خرید و رزرو آنلاین بلیط سینما، کنسرت، تئاتر و...، اسنپ تیکت آسان‌ترین گزینه است. به‌جای معطلی در گیشه، آنلاین بلیط بخرید!',
    buttonText: 'خرید بلیط',
    showInput: false,
    color: '#6e1ec3',
  }

  const dataBanner = {
    img: ticketSection,
    title: 'خرید آنلاین بلیط در یک دقیقه',
    text:
      'کافی است تصمیم بگیریم سینما، تئاتر یا کنسرت برویم یا استخر، اتاق‌ فرار، تم پارک، پینت‌بال، شهربازی و...؛ آن‌وقت است که با چند قدم ساده و در عرض یک دقیقه می‌توانیم بلیت بخریم. اسنپ تیکت با رویکردی نو در زمینه خرید آنلاین بلیط رویدادهای گوناگون، کنار شماست.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'خرید آسان بلیط ',
        textCard:
          'با اسنپ تیکت در چند گام ساده و سریع، بلیط مراکز تفریحی و هنری را بخرید. بدون پرداخت هیچ هزینه‌ای فقط شماره همراه‌تان را وارد کنید و عضو سایت شوید! دنیایی از هیجان در انتظار شماست!',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'نوآوری در صدور بلیط',
        textCard:
          'با بلیط کاغذی خداحافظی کنید و به طبیعت سلام کنید! بلیط مراکز تفریحی را در اسنپ تیکت آنلاین بخرید و در وقت هم صرفه‌جویی کنید. بلیت الکترونیکی شما با موبایل یا تبلت‌تان کنترل می‌شود.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'نزدیکترین رویدادها به شما',
        textCard:
          'از روی نقشه، مکان (location) موردنظرتان را انتخاب کنید تا مراکز تفریحی و فرهنگی نزدیک به آن را ببینید. دوست دارید کجا تفریح کنید؟',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: ticketRequest1,
        title: 'چه نوع تفریحی می‌خواهید؟',
        name: 'انتخاب دسته‌بندی',
        text:
          'از میان دسته‌بندی‌های مختلف، بخش دلخواه‌تان را انتخاب کنید. استخر یا سینما؟ تئاتر یا کنسرت؟ تم‌پارک یا اتاق فرار؟ پینت‌بال یا لیزرتگ؟ تور گردشگری یا موزه؟ تفریحات کودکان را فراموش نکنید!',
      },
      {
        number: 1,
        id: 'request-2',
        img: ticketRequest2,
        title: 'کجا می‌خواهید بروید؟',
        name: 'انتخاب رویداد',
        text:
          'از میان گزینه‌های هر بخش، کدام‌یک را می‌پسندید؟ با یک کلیک روی هر آگهی، اطلاعات مربوط به آن و نظرات کاربران را بخوانید و برای برنامه‌ریزی نهایی تصمیم بگیرید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: ticketRequest3,
        title: 'چه موقع فرصت دارید؟',
        name: 'انتخاب روز و سانس',
        text:
          'برای خرید و رزرو آنلاین بلیط سینما، کنسرت، تئاتر و رویدادهای دیگر می‌توانید سانس‌ها و تاریخ هر برنامه را ببینید. انتخاب مناسب‌ترین زمان با شماست.',
      },
    ],
    color: '#6e1ec3',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'اسنپ تیکت چیست و چه نوع بلیط هایی را می‌توان رزرو کرد؟',
      answer:
        'اسنپ تیکت «مرجع خرید آنلاین بلیط های تفریحی»، بستری مناسب جهت ایجاد لحظات خاطره انگیز با رزرو اینترنتی بلیط های «سینما، کنسرت، تئاتر، استخر، موزه، زیپ لاین، بیلیارد، پیست یخ، اتاق فرار، پینت بازی، شهربازی و... »',
    },
    {
      id: 1,
      active: false,
      title: 'نحوه خرید و رزرو آنلاین بلیط چگونه است؟',
      answer:
        '1) انتخاب دسته بندی مورد نظر  2) سپس انتخاب یکی از رویدادهای (آگهی ها) نمایش داده شده 3) تعیین زمان و سانس پیش رو  4) ورود مشخصات و ثبت درخواست',
    },
    {
      id: 2,
      active: false,
      title: 'آیا اسنپ تیکت مبلغ اضافه‌ای برای رزرو بلیط دریافت می‌کند؟',
      answer: 'خیر، مخاطبان تنها مبلغ بلیط را پرداخت می‌کنند.',
    },
    {
      id: 3,
      active: false,
      title: 'آیا می‌توان قبل از خرید، از وضعیت سالن و صندلی‌های خالی مطلع شد؟',
      answer:
        'بله، پس از مرحله خرید بلیط می‌توانید نقشه، جایگاه‌ها و ظرفیت سالن را مشاهده نمایید.',
    },
    {
      id: 4,
      active: false,
      title:
        'آیا می‌توان قبل از پرداخت، صندلی سینما و کنسرت یا تئاتر را انتخاب کرد؟',
      answer:
        'بله، شما می‌توانید ابتدا صندلی مورد نظر خود را انتخاب کرده و سپس پرداخت را انجام دهید.',
    },
    {
      id: 5,
      active: false,
      title: 'آیا می‌توان پس از انتخاب صندلی، آن را تغییر داد؟',
      answer:
        'در زمان انتخاب صندلی قبل از بستن صفحه مربوط به سالن، می‌توانید با کلیک روی صندلی مورد نظر و تغییر رنگ آن به آبی صندلی را انتخاب و با کلیک مجدد، آن را حذف نمایید.',
    },
    {
      id: 6,
      active: false,
      title: 'براي خريد اينترنتي از کارت چه بانک‌هایی می‌توان استفاده کرد؟',
      answer:
        'براي خريد اينترنتي مي‌توان از تمام کارت‌هاي عضو شتاب و درگاه‌ بانک‌های ملت و سامان مندرج در سایت استفاده کرد.',
    },
  ]

  const dataFooter = {
    img: ticketFooter,
    icon: ticket,
    title: 'رزرو اینترنتی بلیط با اسنپ تیکت',
    text:
      'اسنپ تیکت دستیار آنلاین شما در وقت خوش تفریح است! تفریح موردنظر را انتخاب کنید و نظرات کاربران و تخفیف‌ها را ببینید. با خرید و رزرو آنلاین بلیط سینما، کنسرت، تئاتر و تفریحات دیگر، ساده‌تر و سریع‌تر از همیشه برنامه‌ریزی کنید، بلیت بخرید و خوش باشید!',
    button: 'رزرو بلیط',
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

export default Ticket
