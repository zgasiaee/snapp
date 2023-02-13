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
import lodgingsSlider from './../../assets/img/lodgings-slider.jpg'
import lodgingsSection from './../../assets/img/lodgings-section.jpg'
import card1 from './../../assets/img/lodgings-card-1.png'
import card2 from './../../assets/img/lodgings-card-2.png'
import card3 from './../../assets/img/lodgings-card-3.png'
import lodgingsRequest1 from '../../assets/img/lodgings-request-1.jpg'
import lodgingsRequest2 from '../../assets/img/lodgings-request-2.jpg'
import lodgingsRequest3 from '../../assets/img/lodgings-request-3.jpg'
import lodgingsImg from '../../assets/img/lodgings-img.jpg'
import lodgingsFooter from '../../assets/img/lodgings-footer.jpg'
import lodgings from '../../assets/img/trip.svg'

const Lodgings = () => {
  const dataSlider = {
    img: lodgingsSlider,
    title: 'رزرو اقامتگاه با اسنپ!',
    text:
      'سوپراپلیکیشن اسنپ با ارائۀ پلتفرم اسنپ‌روم توانسته اقامت در هتل‌ها و مهمان خانه‌های ارزان قیمت را آسان‌تر کند. هم اکنون مسافران با پرداخت هزینه‌ای منصفانه از کیفیت بالای خدمات اقامتگاه‌ها بهره‌مند می‌شوند.',
    buttonText: 'رزرو اقامتگاه',
    showInput: false,
    color: '#ff4340',
  }

  const dataBanner = {
    img: lodgingsSection,
    title: 'مزایای رزرو اقامتگاه با اسنپ',
    text:
      'اسپ‌روم با ارائه راهکارهای اساسی به دنبال ساده‌سازی و سرعت بخشیدن به جریان عادی زندگی مردم است.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'رزرو هتل و مهمانپذیر‌ اقتصادی',
        textCard:
          'اقامت در یک هتل، مهمان‌ خانه یا مسافرخانه با امکانات خوب و قیمت اقتصادی برای تمامی مسافران مهیاست. ',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'تنوع گسترده در انواع اقامتگاه',
        textCard:
          'برای انتخاب اقامتگاه مورد نظر دست مسافران باز است و آنها می‌توانند برحسب بودجه و امکانات، اقامتگاه مناسب را رزرو کنند.',
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
        img: lodgingsRequest1,
        title: 'نحوه رزرو اقامتگاه',
        name: 'رزرو اقامتگاه',
        text:
          'وارد سوپراپ اسنپ شوید. گزینه «هتل» را انتخاب کنید. سپس می‌توانید در پایین به بخش اسنپ‌روم بروید. در این بخش عنوان «اقامتگاه اقتصادی» قابل مشاهده است که باید آن را انتخاب کنید. در صفحه بعد اطلاعاتی مانند مبدأ، مقصد، تاریخ سفر و تعداد نفرات را وارد کنید تا لیستی از اقامتگاه‌ها نمایش داده شوند.',
      },
      {
        number: 1,
        id: 'request-2',
        img: lodgingsRequest2,
        title: 'فیلترهای قابل انتخاب',
        name: 'انتخاب دقیق',
        text:
          'بعد از مشاهده لیست اقامتگاه‌ها، می‌توانید از گزینه فیلتر در بالای صفحه استفاده کنید. در فیلترها امکان تغییر تعداد نفرات، ‏تنظیم مقدار قیمت، نوع تخت، نوع اقامتگاه، اقامتگاه‌های با تخفیف، هتل‌های اختصاصی اسنپ و غیره را وجود دارند.‏',
      },
      {
        number: 2,
        id: 'request-3',
        img: lodgingsRequest3,
        title: 'مشاهده اطلاعات اقامتگاه',
        name: 'اطلاعات اقامتگاه',
        text:
          'بعد از انتخاب گزینه مورد نظر خود، اکنون می‌توانید مشخصات و اطلاعات اقامتگاه انتخابی خود را مشاهده کنید. در این صفحه مواردی مانند آدرس، ظرفیت، نوع تخت، امکانات، تقویم اتاق، دسترسی به جاهای دیدنی شهر و قوانین وورد و خروج آورده شده است.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'تجربه راحت و سریع رزرو اقامتگاه',
        text:
          'با سوپراپلیکیشن اسنپ خیالتان بابت رزرو اقامتگاه راحت است. مسافران عزیز می‌توانند در هر زمان از روز به اینترنت وصل و از ‏طریق سوپراپ اسنپ، اقامتگاه خود را رزرو کنند. کل فرآیند رزرو اتاق تنها در چند دقیقه انجام می‌شود. از این طریق می‌توان در ‏زمان و هزینه‌های مربوط به رزرو حضوری هتل و مهمان خانه صرفه جویی کرد.‏',
      },
      { id: 2, type: 'img', source: lodgingsImg },
      {
        id: 3,
        title: 'کیفیت بالای هتل‌ها و مهمانپذیر‌ها',
        text:
          'برای حفظ رفاه حال مهمانان، تمامی واحدهای اقامتی در اسنپ‌روم از نظر استانداردهای میزبانی و امکانات رفاهی بازرسی می‌شوند. از این رو، کلیه اقامتگاه‌ها در ارائه خدمات و امکانات از کیفیت بالایی برخوردار هستند. نظارت و کنترل اسنپ بر کیفیت اقامتگاه‌ها راهی برای ارتقای سطح خدمات به مسافران عزیز است.',
      },
      {
        id: 4,
        title: 'کنسلی کاملاً رایگان',
        text:
          'لغو یا کنسلی اتاق در اسنپ‌روم رایگان است! مسافران می‌توانند تا ساعت ۱۴:۰۰ روز شروع اقامت، اقامتگاه خود را کسل کنند. اما پس از تحویل گرفتن اتاق امکان کنسلی وجود ندارد. کنسلی رایگان این امکان را در اختیار مسافران قرار می‌دهد که در صورت اشتباه در رزرو اقامتگاه بتوانند هزینه کامل آن را دوباره دریافت کنند.',
      },
    ],
    color: '#ff4340',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'برای رزرو اقامتگاه از اسنپ‌ به چه مواردی نیاز است؟',
      answer:
        'دسترسی به اینترنت از طریق لپ تاپ، تبلت یا تلفن همراه و در اختیار داشتن مشخصات کارت بانکی در یکی از بانک‌های عضو ‏شبکه شتاب به همراه رمز دوم آن برای هر رزرو آنلاین اقامتگاه ضروری است.‏',
    },
    {
      id: 1,
      active: false,
      title: 'آیا امکان تمدید اقامتگاه وجود دارد؟',
      answer:
        'دسترسی به اینترنت از طریق لپ تاپ، تبلت یا تلفن همراه و در اختیار داشتن مشخصات کارت بانکی در یکی از بانک‌های عضو ‏شبکه شتاب به همراه رمز دوم آن برای هر رزرو آنلاین اقامتگاه ضروری است.‏',
    },
    {
      id: 2,
      active: false,
      title: 'هر اقامتگاه را برای چه مدت می‌توانم اجاره کنم؟',
      answer:
        'حداقل و حداکثر زمان اجاره هر اقامتگاه در صفحه‌ی اقامتگاه توسط میزبان مشخص شده است.‏',
    },
    {
      id: 3,
      active: false,
      title: 'چطور در مورد نظافت اقامتگاه مطمئن شوم؟',
      answer:
        'تمامی اقامتگاه‌ها در زمان‌های مختلف در طول سال توسط کارشناسان کنترل کیفیت اسنپ بررسی و بازرسی می‌شوند و اگر ‏از نظر نظافت مورد تأیید نباشد واحد غیرفعال خواهد شد. ‏‏',
    },
    {
      id: 4,
      active: false,
      title: 'در زمان تحویل اقامتگاه چه مدارک شناسایی همراه داشته باشم؟',
      answer:
        'بر اساس قوانین جمهوری اسلامی ایران، برای اقامت در اقامتگاه باید مدارک شناسایی و مدارک اثبات محرمیت را به همراه داشته ‏باشید؛ اما بعضی از میزبان‌ها با شرایط مهمان موافقت می‌کنند. می‌توانید به انتهای صفحه بروید و بخش قوانین اقامتگاه را مطالعه ‏کنید.‏',
    },
    {
      id: 5,
      active: false,
      title:
        'کد تخفیف یا امتیاز همراهی چیست و چطور می‌توان آنها را دریافت کرد؟',
      answer:
        'با عضو شدن و فعالیت در اسنپ می‌توان کد تخفیف و امتیاز همراهی دریافت کرد. در زمان سفر می‌توان از کدهای تخفیف و ‏امتیازهای همراهی برای کاهش هزینه خرید بلیت استفاده کرد.‏',
    },
  ]

  const dataFooter = {
    img: lodgingsFooter,
    icon: lodgings,
    title: 'رزرو اقامتگاه با اسنپ‏',
    text:
      'هم‌اکنون خدمات رزرو اقامتگاه، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن اسنپ به راحتی در دسترس شماست. سیر و سفر را با خدمات گردشگری اسنپ تجربه کنید.',
    button: 'رزرو اقامتگاه',
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

export default Lodgings
