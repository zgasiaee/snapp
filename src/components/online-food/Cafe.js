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
import cafeSlider from './../../assets/img/cafe-slider.jpg'
import cafeSection from './../../assets/img/cafe-section.jpg'
import card1 from './../../assets/img/cafe-card-1.png'
import card2 from './../../assets/img/cafe-card-2.png'
import card3 from './../../assets/img/cafe-card-3.png'
import cafeRequest1 from '../../assets/img/cafe-request-1.jpg'
import cafeRequest2 from '../../assets/img/cafe-request-2.jpg'
import cafeRequest3 from '../../assets/img/cafe-request-3.jpg'
import cafeFooter from '../../assets/img/cafe-footer.jpg'
import food from '../../assets/img/food.svg'
import classic from '../../assets/img/classic.jpeg'
import damcafe from '../../assets/img/damcafe.png'
import lamiz from '../../assets/img/lamiz.jpg'
import nafas from '../../assets/img/nafas.jpeg'
import raees from '../../assets/img/raees.jpg'
import roberto from '../../assets/img/roberto.jpg'
import seencafe from '../../assets/img/seencafe.jpg'
import viona from '../../assets/img/viona.jpg'

const Cafe = () => {
  const dataSlider = {
    img: cafeSlider,
    title: 'سفارش آنلاین از کافه اسنپ',
    text:
      'اگر دلتان برای سرزدن به کافه موردعلاقه‌تان و سفارش‌دادن نوشیدنی یا کیک خوشمزه تنگ شده است اما فرصت ندارید، کافه را به خانه بیاورید! با سفارش آنلاین از اسنپ می‌توانید همان همیشگی را از منوی کافه موردعلاقه‌تان سفارش بدهید یا به‌سراغ منوی کافه‌های مختلف بروید و از میان گزینه‌های رنگارنگ‌شان دست به انتخاب بزنید.',
    buttonText: 'سفارش دهید',
    showInput: false,
    color: '#ff00a6',
  }

  const dataBanner = {
    img: cafeSection,
    title: 'مزایای سفارش آنلاین از کافه',
    text:
      'سفارش از کافه‌ها در اسنپ به شما کمک می‌کند که:با مقایسه قیمت‌ها و کیفیت کافه‌های مختلف، آسان و بی‌دردسر سفارش دهید.با مرور امتیازهای هر کافه و نظر کاربران، هوشمندانه انتخاب کنید.از تخفیف‌های جذاب و خرید اعتباری (الان بخر؛ بعدا پرداخت کن) استفاده کنید.با صرفه‌جویی در وقت، بی‌دردسر، سفارشتان را در محل دلخواه تحویل بگیرید.',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'دسترسی به بهترین کافه‌ها',
        textCard:
          'با اسنپ، فاصله شما تا بهترین کافه‌ها فقط چند کلیک است! به راحتی محبوب ترین کافه خود را پیدا کنید.',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'سفارش همان همیشگی',
        textCard:
          'انواع کیک، تارت، دسرهای معروفی مثل تیرامیسو و ترافل یا انواع قهوه، اسموتی‌ و حتی دمنوش یا نوشیدنی‌های سرد را بی‌دردسر سفارش دهید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'تحویل سریع و باکیفیت',
        textCard:
          'زودتر از آنچه فکرش را بکنید، سفارش‌تان با بسته‌بندی مناسب درب منزل شماست!',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: cafeRequest1,
        title: 'راهنمای انتخاب کافه دلخواه',
        name: 'انتخاب بهترین کافه',
        text:
          'در اپلیکیشن اسنپ، بخش غذا و بعد کافه را لمس کنید و با خیال راحت، منوی کافه‌های اطراف‌تان را ببینید، نظرات کاربران قبلی درباره هر کافه را مرور کنید و خوراکی دلخواه‌تان را سفارش دهید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: cafeRequest2,
        title: 'توضیحات سفارش با سلیقه شما',
        name: 'نوشتن توضیحات سفارش',
        text:
          'قهوه ترک را با فوم زیاد دوست دارید؟ از بادام‌‌زمینی روی کیک آلبالویی خوشتان نمی‌آید؟ نکات باب میل‌تان را در زمان ثبت سفارش بنویسید. انگار در کافه نشسته‌اید و بی‌واسطه درباره سفارشتان توضیح می‌دهید. کافه‌ها در اسنپ سفارشتان را همان‌طور که دوست دارید، برایتان آماده می‌کنند.',
      },
      {
        number: 2,
        id: 'request-3',
        img: cafeRequest3,
        title: 'امکان تحویل سفارش با پیک یا حضوری',
        name: 'امکان دریافت حضوری',
        text:
          'سفارش را می‌توانید درب منزل تحویل بگیرید اما اگر دوست دارید به کافه سر بزنید ولی فرصت کافی ندارید، سفارش را آنلاین ثبت کنید تا وقتی که به کافه می‌رسید، سفارش‌تان هم آماده باشد و مستقیما تحویل بگیرید.',
      },
    ],
    dataCard: [],
    color: '#ff00a6',
  }

  const dataFooter = {
    img: cafeFooter,
    icon: food,
    title: 'سفارش اینترنتی از کافه',
    text:
      'هروقت هوس کردید که خودتان یا دوستان و خانواده را به کافه‌ای درجه‌یک مهمان کنید و به هر دلیلی امکان مراجعه حضوری نداشتید، یادتان باشد که اسنپ از شما پذیرایی می‌کند. کافی است که از میان کافه‌های پرشمار موجود در آن به بهترین انتخاب برسید. زندگی در عصر سرعت، راهکارهای سریع و بهینه هم می‌خواهد. اسنپ با انبوهی از ترفندهای تازه و عالی برای جلب رضایت شما آماده است!',
    button: 'سفارش دهید',
  }

  const articleData = {
    items: [
      { id: 0, img: seencafe },
      { id: 1, img: lamiz },
      { id: 2, img: raees },
      { id: 3, img: classic },
      { id: 4, img: nafas },
      { id: 5, img: roberto },
      { id: 6, img: viona },
      { id: 7, img: damcafe },
    ],
    title: 'پرطرفدارترین کافه ها',
    cards: [
      {
        id: 0,
        bgc: '#ffffff',
        title: '',
        text:
          'این سال‌ها، تعداد کافه‌های رنگارنگ در سطح شهرها بسیار زیاد شده است. گاهی انتخاب از میان گزینه‌های مختلف سخت می‌شود. اگر خودتان اهل کافه‌نشینی باشید که حتما با بهترین‌ها آشنا هستید. اگر هم زیاد وارد نیستید و نمی‌دانید کدام کافه بهترین منو را پیش رویتان می‌گذارد، با مرور نظرات کاربران و امتیاز کافه‌های موجود در اسنپ می‌توانید به بهترین و مناسب‌ترین گزینه برسید. هرکس سلیقه‌ و خواسته‌هایی در انتخاب دارد. برای پیداکردن بهترین مورد برای شما، امکاناتی مانند فیلترهای مختلف در اسنپ وجود دارد.',
      },
      {
        id: 1,
        bgc: '#f5f5f6',
        title: 'کافه‌های خلاق چه می‌کنند؟ ',
        text:
          'کافه‌های محبوب راه و رمز ورود به قلب مشتریان را می‌دانند. برای همین است که می‌توانند دلشان را به دست بیاورند و آنها را تبدیل به مشتریان کنند که با عبارت معروفِ «همون همیشگی» مدام مهمانشان می‌شوند.یک کافه برای رساندن مشتریان به مرحله «همون همیشگی» چه می‌کند؟ خلاقیت که حدومرز ندارد. خلاق‌ها به‌جز کیفیت خوراکی‌هایشان می‌دانند که چطور روی فضای کافه یا گزینه‌های منو کار کنند که نگاه‌ همه را به‌سمت خودشان بکشانند.بعضی از کافه‌ها با اسم‌گذاری خلاقانه، انتخاب از میان گزینه‌های مختلف را شیرین و مفرح می‌کنند. مثلا مرور فهرستی از نام‌های عجیب‌وغریبی که نه تا به حال شنیده‌اید و نه طعمشان را امتحان کرده‌اید، زیاد جذاب نیست. کافه‌ای که شرحی خودمانی و قابل‌درک برای مشتریان در منو می‌آورد، راحت‌تر به گزینه اصلی منتخبشان تبدیل می‌شود و دلشان را به‌دست می‌آورد.بعضی از کافه‌ها هم روی تزیینات داخلی کار می‌کنند. استفاده از تِم و مفهومی خاص برای فضای کافه هم می‌تواند آن را دلنشین‌تر کند. مثلا شما دوست دارید در کافه‌ای وقت بگذرانید که با صندلی‌هایی ساده و بدرنگ یادآور کبابی‌های دهه ۳۰ و ۴۰ هستند یا کافه‌ای رنگی با صندلی‌هایی راحت و تابلوهای نقاشی زیبا؟',
      },
      {
        id: 2,
        bgc: '#ffffff',
        title: 'پرطرفدارترین سفارش‌ها از کافه‌ها کدام خوراکی‌ها هستند؟',
        text:
          'هر کافه‌ای منوی مخصوص به خودش را دارد اما بعضی از گزینه‌ها آن‌قدر محبوب‌اند که در منوی بسیاری از کافه‌ها دیده می‌شوند. اگر دوست دارید که با پرطرف‌دارترین‌ها آشنا شوید، نگاه به موارد زیر داشته باشید:موهیتو از میان نوشیدنی‌های سرد؛کافه لاته از میان نوشیدنی‌های گرم؛پاستاهای مختلف در میان غذاها؛براونی و تیرامیسو از میان کیک‌ها؛کرپ‌های مختلف.',
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

export default Cafe
