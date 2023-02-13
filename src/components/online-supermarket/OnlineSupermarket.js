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
import supermarketSlider from './../../assets/img/supermarket-slider.jpg'
import supermarketSection from './../../assets/img/supermarket-section.jpg'
import easy from './../../assets/img/supermarket-card-1.png'
import economy from './../../assets/img/supermarket-card-2.png'
import support from './../../assets/img/supermarket-card-3.png'
import supermarketupRequest1 from '../../assets/img/supermarket-request-1.jpg'
import supermarketupRequest2 from '../../assets/img/supermarket-request-2.jpg'
import supermarketupRequest3 from '../../assets/img/supermarket-request-3.jpg'
import supermarketFooter from '../../assets/img/supermarket-footer.jpg'
import market from '../../assets/img/market.svg'

//video
import supermarketVideo from '../../assets/video/online-supermarket.mp4'

const OnlineSupermarket = () => {
  const dataSlider = {
    img: supermarketSlider,
    title: 'سوپرمارکت آنلاین اسنپ!',
    text:
      'بیش از ۵ هزار کالای مصرفی و خواربار مختلف در سوپرمارکت اسنپ در دسترس است. سفارش شما در کوتاه‌ترین زمان و با بسته‌بندی مناسب، درب منزل یا محل کار تحویل خواهد شد.',
    buttonText: 'خرید با تخفیف',
    showInput: false,
    color: '#0a2cdc',
  }

  const dataBanner = {
    img: supermarketSection,
    title: 'مزایای خرید از سوپرمارکت آنلاین اسنپ',
    text:
      'با خرید آنلاین مایحتاج روزانه خود از طریق سوپراپلیکیشن اسنپ، از رفتن به فروشگاه‌های مختلف بی‌نیاز شوید و دغدغه خریدهای سوپرمارکتی و ترافیک و دردسرهای آن را از ذهن‌تان پاک کنید!',
    cards: [
      {
        id: 1,
        imgCard: easy,
        titleCard: 'آسان و مطمئن',
        textCard:
          'به شکلی راحت و مطمئن می‌توانید اقلام مصرفی خود را با تخفیف‌های ویژه از طریق سوپرمارکت آنلاین اسنپ خریداری کنید.',
      },
      {
        id: 2,
        imgCard: economy,
        titleCard: 'صرفه جویی در زمان',
        textCard:
          ' به جای اتلاف زمان در ترافیک و حضور در فروشگاه، خرید اینترنتی محصولات سوپرمارکتی به صرفه جویی در زمان و هزینۀ جابجایی کمک می‌کند.',
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
        img: supermarketupRequest1,
        title: 'ثبت سفارش از سوپرمارکت',
        name: 'ثبت سفارش',
        text:
          'وارد اپلیکیشن اسنپ شوید و آیکن سوپرمارکت را انتخاب کنید. بعد از  آن باید نوع فروشگاه ‏مورد نظر خود را تعیین کنید. سپس می‌توانید از دسته بندی‌های مختلف، محصولات خود را انتخاب ‏کرده و سفارشتان را نهایی کنید.‏',
      },
      {
        number: 1,
        id: 'request-2',
        img: supermarketupRequest2,
        title: 'انتخاب زمان تحویل کالا',
        name: 'زمان تحویل',
        text:
          'شما می‌توانید زمان و ساعت تحویل اقلام خریداری شده را به دلخواه خود ‏مشخص کنید. هر روز از ساعت 9 صبح تا 12 شب، امکان ارسال کالاهای خریداری شده به درب منزل یا محل کار وجود دارد.‏',
      },
      {
        number: 2,
        id: 'request-3',
        img: supermarketupRequest3,
        title: 'پرداخت آنلاین، بدون دردسر',
        name: 'پرداخت آنلاین',
        text:
          'به‌ راحتی می‌توانید از طریق درگاه پرداخت آنلاین، هزینه سفارش خود را پرداخت کنید. بعد از ‏پرداخت، پیامکی برای آماده سازی و ارسال اقلام خریداری شده، دریافت خواهید کرد و همچنین در هر لحظه در اپلیکیشن اسنپ آخرین وضعیت ارسال کالا را می‌توان مشاهده کرد.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'تخفیف‌ در سوپرمارکت آنلاین اسنپ',
        text:
          'از ویژگی‌های منحصر به فرد سوپرمارکت اسنپ، ارائه تخفیف‌های هیجان انگیز در روزهای مختلف هفته است. بنابراین مشتریان گرامی می‌توانند کالاهای باکیفیت و در عین حال با قیمت مناسب را در سبد خرید خود اضافه کنند و همچنین امکان خریدهای بیشتر و متنوع، برای کلیه اقشار جامعه مهیا شود.',
      },
      { id: 2, type: 'video', source: supermarketVideo },
      {
        id: 3,
        title: 'فعال بودن در بیشتر شهرهای کشور',
        text:
          'خرید اینترنتی از سوپرمارکت اسنپ، در حال حاضر برای ساکنان شهرهای تهران، یزد، قم، کرج، مشهد، شیراز، اصفهان، تبریز، اهواز، رشت، لواسان، بوشهر، کرمان، نیشابور، همدان، ارومیه و قزوین فعال است. اسنپ در تلاش است تا برای تمام شهرهای کشور، خرید آنلاین سوپرمارکتی را فراهم کند.',
      },
      {
        id: 4,
        title: 'تنوع بالای اقلام مصرفی روزانه',
        text:
          'سوپرمارکت آنلاین اسنپ بیش از پنج هزار کالای متنوع در دسته‌بند‌ی‌های گوناگون از جمله لبنیات، خواربار، میوه و سبزیجات تازه، مواد پروتئینی، نان و شیرینی و محصولات آرایشی و بهداشتی را به صورت آنلاین عرضه می‌کند. گستردگی محصولات این امکان را به کاربر می‌دهد که تمامی اجناس مورد نیاز خود را در یک سفارش تهیه کند.',
      },
    ],
    color: '#0a2cdc',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'چگونه از کد تخفیف سوپر مارکت اسنپ استفاده کنم؟',
      answer:
        'در هنگام ثبت سفارش و بعد از انتخاب زمان تحویل، می‌توانید کد تخفیف خود را در قسمت مشخص ‏شده وارد کرده و گزینه اعمال کد را انتخاب کنید.‏',
    },
    {
      id: 1,
      active: false,
      title: 'آیا امکان سفارش از شعب مختلف ‌هایپر استار وجود دارد؟',
      answer:
        'با توجه به اینکه فروشگاه ‌هایپراستار نسبت به محدوده آدرس شما مشخص می‌شود، بنابراین در هر ‏سفارش تنها امکان انتخاب یک آدرس و یک فروشگاه وجود دارد.‏',
    },
    {
      id: 2,
      active: false,
      title: 'آیا می‌توانم بعد از پرداخت به اقلام سبد خرید خود اضافه کنم؟',
      answer:
        'خیر، امکان اضافه کردن به اقلام سفارش پس از ثبت موفق سفارش وجود ندارد، در صورت نیاز ‏می‌توانید سفارش جدیدی ثبت کنید.‏',
    },
    {
      id: 3,
      active: false,
      title: 'آیا می‌توانم بعد از پرداخت، آدرس خود را تغییر دهم؟',
      answer:
        'بله، شما ‌می‌توانید تا سه ساعت قبل از شروع بازه انتخابی زمان تحویل سفارش، با پشتیبانی اسنپ ‏مارکت تماس گرفته و نسبت به تغییر آدرس اقدام کنید. قابل توجه است که در صورت تغییر آدرس ‏به خارج از محدوده سرویس دهی ‌هایپراستار، سفارش لغو خواهد شد.‏',
    },
    {
      id: 4,
      active: false,
      title: 'آیا امکان دسترسی به سوابق خریدهای قبلی وجود دارد؟',
      answer:
        'بله. باید به حساب کاربری خود وارد شوید، سپس در قسمت حساب کاربری بر روی گزینه «‌لیست ‏سفارش‌ها» یا «سفارش‌های پیشین» کلیک کرده تا سوابق خرید شما نمایش داده شوند.‏',
    },
    {
      id: 5,
      active: false,
      title: 'هزینه ارسال سفارش چگونه محاسبه می‌شود؟',
      answer:
        'هزینه ارسال سفارشات سوپرمارکت اسنپ نسبت به فروشگاه و محل سکونت متفاوت است.‏ همچنین در حال حاضر با توجه به میزان خرید تا سقف مشخص، هزینه ارسال رایگان خواهد شد.',
    },
    {
      id: 6,
      active: false,
      title: 'آیا می‌توانم برای شخص دیگری خرید کنم و سفارش تحویل آن شخص شود؟',
      answer:
        'بله، در بالای اپلیکیشن با انتخاب گزینه «انتخاب آدرس تحویل» و افزودن آدرس جدید، به غیر از ‏وارد کردن آدرس در این قسمت «نام و نام خانوادگی» و «شماره تماس» و اطلاعات مورد نیاز مرتبط ‏با شخص تحویل گیرنده را نیز وارد کنید.‏',
    },
  ]

  const dataFooter = {
    img: supermarketFooter,
    icon: market,
    title: 'خرید از خانه با سوپرمارکت آنلاین اسنپ!‏',
    text:
      'هم‌اکنون سرویس سوپرمارکت اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن به راحتی در دسترس شماست. خرید اینترنتی خواربار را با سوپر اپلیکیشن اسنپ تجربه کنید.',
    button: 'ثبت سفارش سوپرمارکتی',
  }

  return (
    <div>
      <Layout id="0">
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

export default OnlineSupermarket
