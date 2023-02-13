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
import bikeSlider from './../../assets/img/bike-slider.jpg'
import bikeDeliverySlider from './../../assets/img/bike-delivery-slider.jpg'
import fast from './../../assets/img/bike-delivery-card-1.png'
import clear from './../../assets/img/bike-delivery-card-2.png'
import support from './../../assets/img/bike-delivery-card-3.png'
import bikeRequest1 from '../../assets/img/bike-request-1.jpg'
import bikeRequest2 from '../../assets/img/bike-request-2.jpg'
import bikeRequest3 from '../../assets/img/bike-request-3.jpg'
import bikeImg from '../../assets/img/bike-card-img.jpg'
import bikeFooter from '../../assets/img/bike-delivery-footer.jpg'
import bike from '../../assets/img/bike.svg'

const BikeDelivery = () => {
  const dataSlider = {
    img: bikeSlider,
    title: 'پیک موتوری اسنپ!',
    text:
      'با خدمات پیک موتوری اسنپ، ارسال آسان و تحویل به موقع مرسولات را تجربه کنید یا با اسنپ بایک سفر کنید و ترافیک را دور بزنید!',
    buttonText: 'درخواست موتور',
    showInput: false,
    color: '#06d170',
  }

  const dataBanner = {
    img: bikeDeliverySlider,
    title: 'مزایای استفاده از پیک موتوری اسنپ',
    text:
      'سوپراپلیکشن اسنپ روشی ساده و کاربردی برای سفر با موتور «اسنپ‌بایک» و ارسال مرسولات «اسنپ‌باکس» را به صورت کاملا آنلاین، پیش روی شهروندان قرار داده است. ',
    cards: [
      {
        id: 1,
        imgCard: fast,
        titleCard: 'سریع و قابل اعتماد',
        textCard:
          'اسنپ با اطمینان خاطر و در سریع‌ترین زمان ممکن، مرسولات شما را به موقع به مقصد انتخابی می‌رساند.',
      },
      {
        id: 2,
        imgCard: clear,
        titleCard: 'قیمت‌گذاری شفاف',
        textCard:
          'قیمت‌گذاری در اسنپ کاملاً شفاف است و شما می‌توانید با پرداخت هزینه معقولانه، بسته خود را ارسال کنید.',
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
        img: bikeRequest1,
        title: 'درخواست پیک موتوری',
        name: 'درخواست پیک ',
        text:
          'در سوپر اپلیکیشن اسنپ، آیکن «اسنپ» برای جابه‌جای مسافر و آیکن «اسنپ باکس» را برای جابه‌جایی کالا انتخاب کنید. ابتدا آدرس مبدأ و سپس مقصد خود را تعیین کنید. در ادامه می‌توانید مبلغ، گزینه‌های سفر و غیره را مشاهده و ویرایش کنید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: bikeRequest2,
        title: 'ثبت مقصدهای مختلف',
        name: 'ثبت مقصد',
        text:
          'امکان افزودن مقصد‌های بیشتر وجود دارد و می‌توانید چندین بسته را به مقاصد مختلف در سراسر شهر ارسال کنید. این قابلیت به کاهش زمان و سرعت ارسال مرسولات کمک می‌کند.',
      },
      {
        number: 2,
        id: 'request-3',
        img: bikeRequest3,
        title: 'درخواست رفت و برگشت',
        name: 'رفت و برگشت',
        text:
          'ممکن است نیاز باشد بسته‌ای را به مقصدی ارسال کنید و در عوض از مقصد بسته یا رسید امضا شده را دریافت کنید! برای این کار، سوپراپ اسنپ امکان رفت و برگشت مسیر را نیز فراهم و در اختیار شما قرار داده است.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'سفرهای درون شهری با پیک موتوری اسنپ!',
        text:
          'جابه‌جایی افراد در شهرهای بزرگ و پرجمعیت مانند تهران زمان‌بر است. ممک است برای شما هم پیش آمده باشد که باید به سرعت به نقطه‌ای از شهر بروید، اما ترافیک باعث دیرتر رسیدن و بهم ریختن زمانبندی‌تان شده است. برای حل این مشکل، پیک موتوری اسنپ امکان تردد مسافران را از طریق اسنپ بایک فراهم کرده است. برای جابه‌جایی سریع به هر نقطه از شهر می‌توانید از سوپراپ اسنپ استفاده کنید',
      },
      { id: 2, type: 'img', source: bikeImg },
      {
        id: 3,
        title: 'ارسال بسته در یک چشم برهم زدن',
        text:
          'تعداد قابل‌توجهی پیک‌ موتورسوار در اسنپ‌باکس در مناطق مختلف شهر فعالیت می‌کنند تا در مدت زمان کوتاهی بسته شما را دریافت کنند. آنها با سرعت عمل بالا، بسته شما را به مقصد مورد نظر تحویل می‌دهند. پس از تحویل بسته به گیرنده، پیام رسیدن پیک موتوری و تحویل بسته به مقصد برای شما ارسال می‌شود تا خیالتان از بابت رسیدن بسته به دست صاحبش راحت شود. انتقال مرسوله با سرویس موتور اسنپ تا سقف ۵ میلیون تومان تضمین می‌شود.',
      },
      {
        id: 4,
        title: 'فعال بودن در بیشتر شهرهای کشور',
        text:
          'پیک موتوری اسنپ در حال حاضر در شهرهای تهران، مشهد، اصفهان، قم، شیراز، کرج، اهواز، تبریز‌، یزد، کرمان، گیلان، هرمزگان، اراک، قزوین، کرمانشاه، ارومیه، بیرجند، زنجان، اردبیل، خرم‌آباد، سنندج و بجنورد فعال است. اسنپ در تلاش است تا خدمات خود را به کلیه شهرهای کشور گسترش دهد.',
      },
    ],
    color: '#00d170',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'چگونه از اسنپ پیک موتوری بگیریم؟',
      answer:
        'ابتدا وارد سوپراپ اسنپ شوید و آیکن اسنپ بایک را انتخاب کنید. بعد از کلیک بر روی آن آیکن می‌توانید سفارش جدید خود را ثبت کنید. اکنون وارد صفحه‌ای می شوید که باید مبدأ، مقصد و نوع پیک را مشخص کنید.',
    },
    {
      id: 1,
      active: false,
      title: 'ساعات سرویس دهی پیک موتوری اسنپ چگونه است؟',
      answer:
        'پیک موتوری اسنپ ۲۴ ساعته آماده سرویس‌دهی به مشتریان عزیز خود است.',
    },
    {
      id: 2,
      active: false,
      title: 'چه روش‌های حمل و نقلی در دسترس هستند؟',
      answer:
        'در سوپراپلیکشن اسنپ، گزینه «اسنپ‌باکس» برای ارسال مرسوله و گزینه «اسنپ‌بایک» برای جابجایی مسافر با موتور وجود دارند.',
    },
    {
      id: 3,
      active: false,
      title: 'هزینه درخواست پیک موتوری چقدر می‌شود؟',
      answer:
        'شما می‌توانید پیش از ثبت هر درخواست با مشخص کردن مبدأ و مقصد مورد نظر خود و تعیین بازگشت و یا عدم بازگشت سفیر، از هزینه سفر مطلع شوید.',
    },
    {
      id: 4,
      active: false,
      title: 'آیا امکان درخواست تلفنی سفارش وجود دارد؟',
      answer:
        'پیک موتوری اسنپ تنها به صورت آنلاین فعالیت می‌کند و تنها درخواست‌هایی پاسخ موفق دریافت می‌کنند که در سوپراپ اسنپ ثبت شده باشند. بنابراین امکان ارسال تلفنی سفارش وجود ندارد.',
    },
    {
      id: 5,
      active: false,
      title: 'چطور می‌توانم سفیر را روی نقشه ببینم؟',
      answer:
        'زمانی که سفیر درخواست شما را دریاف می کند، می‌توانید از طریق سوپراپ اسنپ، حرکت او را بر روی نقشه رصد کنید.',
    },
    {
      id: 6,
      active: false,
      title: 'نحوه پرداخت هزینه سفارش چقدر است؟',
      answer:
        'هزینه سفارش را می‌توانید به صورت آنلاین (کیف پول آپ یا درگاه بانک) و نقدی پرداخت کنید. همچنین امکان پرداخت از طرف مقصد (تحویل گیرنده) امکان پذیر است.',
    },
  ]

  const dataFooter = {
    img: bikeFooter,
    icon: bike,
    title: 'پیک موتوری اسنپ: ارسال آسان، تحویل به‌موقع',
    text:
      'هم‌اکنون سرویس پیک موتوری اسنپ، از طریق سیستم‌عامل‌های مختلف موبایل و وب اپلیکیشن به راحتی در دسترس شماست. بهترین خدمات پیک موتوری را با سوپر اپلیکیشن اسنپ تجربه کنید.',
    button: 'درخواست موتور',
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

export default BikeDelivery
