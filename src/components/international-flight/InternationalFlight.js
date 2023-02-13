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
import internationalSlider from './../../assets/img/international-flight-slider.jpg'
import internationalSection from './../../assets/img/international-section.jpg'
import vip from './../../assets/img/international-flight-card-1.png'
import variety from './../../assets/img/international-flight-card-2.png'
import support from './../../assets/img/international-flight-card-3.png'
import internationalRequest1 from '../../assets/img/international-request-1.jpg'
import internationalRequest2 from '../../assets/img/international-request-2.jpg'
import internationalRequest3 from '../../assets/img/international-request-3.jpg'
import internationalFooter from '../../assets/img/international-footer.jpg'
import flight from '../../assets/img/Domestic Trip.png'

//video
import flightVideo from './../../assets/video/International-flight.mp4'

const InternationalFlight = () => {
  const dataSlider = {
    img: internationalSlider,
    title: 'خرید بلیط هواپیما خارجی',
    text:
      'خرید بلیط پرواز خارجی با قیمت مناسب و به مقصد کشورهای مختلف، از طریق سوپراپلیکیشن اسنپ فراهم شده است. می‌توان بدون دغدغه و با استفاده از پلتفرم «اسنپ‌تریپ»، مقدمات سفر را با خرید ساده و آسان بلیط هواپیما برنامه‌ریزی کرد.',
    buttonText: 'خرید بلیط هواپیما',
    showInput: false,
    color: '#ff4340',
  }

  const dataBanner = {
    img: internationalSection,
    title: 'خرید بلیط هواپیما خارجی از اسنپ!',
    text:
      'اسنپ‌ با ارائه راهکارهای اساسی به دنبال ساده‌سازی و سرعت بخشیدن به جریان عادی زندگی مردم است.',
    cards: [
      {
        id: 1,
        imgCard: vip,
        titleCard: 'قیمت‌های ویژه',
        textCard:
          'اسنپ‌ برای مسیرهای مختلف پروازی، تخفیف‌های ویژه‌ای در نظر گرفته تا مسافران عزیز بتوانند بلیط‌هایی با قیمت مناسب را تهیه کنند.',
      },
      {
        id: 2,
        imgCard: variety,
        titleCard: 'تنوع در نوع بلیط و شرکت‌های هواپیمایی',
        textCard:
          'مسافران برای خرید بلیط پرواز خارجی از بین انواع بلیط (اکونومی یا بیزینس) و ایرلاین‌های مختلف حق انتخاب دارند.',
      },
      {
        id: 3,
        imgCard: support,
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
        img: internationalRequest1,
        title: 'نحوه رزرو بلیط پرواز خارجی',
        name: 'رزرو پرواز خارجی',
        text:
          'وارد سوپراپ اسنپ شوید. گزینه «بلیط سفر» را انتخاب کنید. سپس چهار گزینه برای شما ظاهر می‌شوند. گزینه «پرواز خارجی» را انتخاب کنید تا وارد صفحه اصلی اسنپ‌تریپ شوید. با مشخص کردن مبدأ، مقصد، تاریخ سفر، یک طرفه یا دو طرفه بودن سفر و تعداد مسافران می‌توانید لیستی از ایرلاین‌های مختلف با شرایط و امکانات گوناگون را مشاهده کنید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: internationalRequest2,
        title: ' فیلترهای قابل انتخاب',
        name: 'انتخاب دقیق',
        text:
          'بعد از مشاهده لیست شرکت‌های هواپیمایی، می‌توانید از فیلترهای ارزان‌ترین، گران‌ترین، بیشترین تخفیف، زودترین و دیرترین ساعت، زمان حرکت، تنظیم مقدار قیمت، نوع پرواز، تعداد توقف، کلاس پروازی و سایر موارد را جهت راحتی هر چه بیشتر خود در جستجوی بهترین بلیط استفاده کنید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: internationalRequest3,
        title: 'قوانین استرداد بلیط',
        name: 'استرداد بلیط',
        text:
          'بعد از انتخاب گزینه مورد نظر خود، اکنون وارد صفحه‌ای می‌شوید که جزئیات قسمت و اطلاعات پرواز آماده است. در قسمت پایین قوانین و شرایط کنسلی بلیط وجود دارد. جریمه کنسلی بر طبق قوانین سازمان هواپیمایی تدوین شده است.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها',
        text:
          'ایرلاین‌های معتبر زیادی در اسنپ‌تریپ آماده ارائه بلیط پرواز خارجی هستند. از شرکت‌های هواپیمایی مطرح می‌توان به ماهان، قطر ایرویز، قشم ایر، ایران ایر تور، امارات ایرلاین و معراج اشاره کرد. هر یک از این ایرلاین‌ها مشخصات مختص به خود را دارند. برخی از آنها امکانات و خدمات رفاهی بیشتر دارند و بعضی دیگر بلیط هواپیما را با قیمت پایین‌تر ارائه می‌دهند.',
      },
      { id: 2, type: 'video', source: flightVideo },
      {
        id: 3,
        title: 'تنوع در نوع بلیط هواپیما و کلاس پروازی',
        text:
          'در سوپراپلیکیشن اسنپ کلیه خدمات جهت راحتی حال مسافران در نظر گرفته شده است. مسافران عزیز می‌توانند در بخش فیلترها نوع پرواز و کلاس پروازی خود را انتخاب کنند. برای نوع پرواز خارجی امکان انتخاب بلیط سیستمی و چارتری نیز وجود دارد. همچنین در بخش کلاس پروازی می‌توان از گزینه‌های اکونومی و بیزنس استفاده کرد.',
      },
      {
        id: 4,
        title: 'دانستی‌های سفر با اسنپ‌تریپ',
        text:
          'در مجله اسنپ‌تریپ می‌توان هر اطلاعاتی که برای سفر نیاز است را یکجا به دست آورید. از موضوعات مربوط به ایران گردی گرفته تا معرفی جاذبه‌های دیدنی جهان و رستوران‌های مشهور دنیا، اسنپ‌تریپ بستری برای کسب دانش برای کسب تجربه سفری لذت بخش و ایمن است.',
      },
    ],
    color: '#ff4340',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: '‏برای خرید بلیط پرواز خارجی از اسنپ به چه امکاناتی نیاز داریم؟',
      answer:
        'دسترسی به اینترنت از طریق لپ تاپ، تبلت یا تلفن همراه و در اختیار داشتن مشخصات کارت ‏بانکی در یکی از بانک‌های عضو شبکه شتاب به همراه رمز دوم برای هر خرید اینترنتی بلیط هواپیما ‏ضروری است.‏‏‏',
    },
    {
      id: 1,
      active: false,
      title:
        'بعد از خرید آنلاین بلیط پرواز خارجی چطور می‌توانم بلیط خودم را دریافت کنم؟',
      answer:
        'بعد از کامل‌کردن اطلاعات خود و پرداخت آنلاین مبلغ بلیط، لینک دانلود بلیط از طریق پیامک و ‏ایمیل برای شما ارسال می‌شود. با ورود به این لینک می‌توانید بلیط خود را دانلود کنید.‏‏‏',
    },
    {
      id: 2,
      active: false,
      title: '‏میزان بار مجاز برای هر بلیط چقدر است؟',
      answer:
        'بسته به نوع شرکت هواپیمایی میزان بار مجاز برای هر نفر متفاوت است. میزان بار مجاز هر نفر را ‏می‌توانید در زمان خرید آنلاین بلیط پروازهای خارجی مشاهده کنید.‏',
    },
    {
      id: 3,
      active: false,
      title: 'جریمه کنسلی بلیط پرواز خارجی چطور محاسبه می‌شود؟',
      answer:
        'جریمه کنسلی بلیط پرواز خارجی به عوامل مختلفی از جمله شرکت هواپیمایی و ساعتی بستگی دارد ‏که برای استرداد بلیط هواپیما اقدام می‌کنید. برای مشاهده درصد جریمه کنسلی بلیط می‌توانید به ‏صفحه قوانین و مقررات مراجعه کنید.‏',
    },
    {
      id: 4,
      active: false,
      title: '‏در فرودگاه و هنگام سوار شدن به هواپیما چه مدارکی لازم است؟',
      answer:
        'ارائه بلیط (نسخه چاپ شده یا تصویر آن بر روی گوشی تلفن همراه یا تبلت) یا شماره بلیط و کارت ‏شناسایی معتبر (شناسنامه یا کارت ملی یا گواهینامه‌ی رانندگی یا گذرنامه) ضروری است.‏',
    },
    {
      id: 5,
      active: false,
      title:
        'کد تخفیف یا امتیاز همراهی چیست و چطور می‌توان آنها را دریافت کرد؟',
      answer:
        'با عضو شدن و فعالیت در اسنپ‌ می‌توان کد تخفیف و امتیاز همراهی دریافت کرد. در زمان سفر ‏می‌توان از کدهای تخفیف و امتیازهای همراهی برای کاهش هزینه خرید بلیط استفاده کرد.‏',
    },
  ]

  const dataFooter = {
    img: internationalFooter,
    icon: flight,
    title: 'اسنپ، آسان‌ترین راه برای خرید بلیط پرواز خارجی‏',
    text:
      'هم‌اکنون خدمات فروش بلیط هواپیما خارجی، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن اسنپ به راحتی در دسترس شماست. سیر و سفر را با خدمات گردشگری اسنپ تجربه کنید.',
    button: 'خرید بلیط هواپیما',
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

export default InternationalFlight
