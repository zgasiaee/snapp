import React from 'react'

//component
import Slider from '../slider/Slider'
import IconBar from '../iconBar/IconBar'
import Banner from '../banner/Banner'
import Section from '../shared/section/Section'
import FrequentlyQuestion from '../shared/frequently-question/FrequentlyQuestion'
import BannerFooter from '../shared/banner-footer/BannerFooter'
import Categories from '../shared/categories/Categories'
import Article from '../shared/article/Article'
import Layout from '../shared/Layout'

//image
import onlineFoodSlider from './../../assets/img/online-food-slider.jpg'
import onlineFoodSection from './../../assets/img/online-food-section.jpg'
import card1 from './../../assets/img/food-card-1.png'
import card2 from './../../assets/img/food-card-2.png'
import card3 from './../../assets/img/food-card-3.png'
import foodRequest1 from '../../assets/img/food-request-1.jpg'
import foodRequest2 from '../../assets/img/food-request-2.jpg'
import foodRequest3 from '../../assets/img/food-request-3.jpg'
import foodFooter from '../../assets/img/food-footer.jpg'
import food from '../../assets/img/food.svg'
import bakery from '../../assets/img/bakery.png'
import cafe from '../../assets/img/cafe.png'
import fruit from '../../assets/img/fruit.png'
import icecream from '../../assets/img/icecream.png'
import nuts from '../../assets/img/nuts.png'
import protein from '../../assets/img/protein.png'
import restaurant from '../../assets/img/restaurant.png'
import sweets from '../../assets/img/sweets.png'
import burger from '../../assets/img/burger.jpg'
import fastfood from '../../assets/img/fastfood.jpg'
import fry from '../../assets/img/fry.jpg'
import gilaki from '../../assets/img/gilaki.jpg'
import intl from '../../assets/img/intl.jpg'
import irani from '../../assets/img/irani.jpg'
import kabab from '../../assets/img/kabab.jpg'
import pasta from '../../assets/img/pasta.jpg'
import pitza from '../../assets/img/pitza.jpg'
import salad from '../../assets/img/salad.jpg'
import sandwich from '../../assets/img/sandwich.jpg'
import sea from '../../assets/img/sea.jpg'
import Baguette from '../../assets/img/Baguette.png'
import Bergur1385 from '../../assets/img/Bergur1385.png'
import BurgerLand from '../../assets/img/Burger Land.png'
import Hani from '../../assets/img/Hani.png'
import Perperook from '../../assets/img/Perperook.png'
import Procalory from '../../assets/img/Procalory.png'
import Raftari from '../../assets/img/Raftari.png'
import Shila from '../../assets/img/Shila.png'

//video
import foodVideo from '../../assets/video/food.mp4'

const OnlineFood = () => {
  const dataSlider = {
    img: onlineFoodSlider,
    title: 'سفارش غذا اسنپ!',
    text:
      'وقتی می‌توانیم در یک چشم به‌هم‌زدن غذای موردعلاقه‌‌مان را با بهترین کیفیت در محل دلخواه دریافت کنیم یا با چند کلیک، منوی بهترین رستوران‌های اطراف به ما نشان داده می‌شوند یا می‌توانیم نظرات مشتریان قبلی را بخوانیم و از کیفیت انتخاب‌مان مطمئن شویم، دیگر چرا خرید حضوری؟',
    buttonText: 'غذا سفارش دهید',
    showInput: false,
    color: '#ff00a6',
  }

  const dataBanner = {
    img: onlineFoodSection,
    title: 'مزایای سفارش از اسنپ',
    text:
      'وقت طلاست. تمام تلاش‌ اسنپ در بخش سفارش انلاین غذا بر مبنای همین جمله دو کلمه‌ای است. اینکه فهرست بلندی از غذاهای لذیذ با قیمت‌های مناسب پیش رویتان باشد، گزینه موردنظرتان با چند کلیک ساده در بهترین بسته‌بندی و طی سریع‌ترین زمان ممکن به دست‌تان برسد. به‌نظر شما جای تردید باقی می‌ماند؟',
    cards: [
      {
        id: 1,
        imgCard: card1,
        titleCard: 'غذای ملل مختلف',
        textCard:
          'دست‌تان برای انتخاب انواع غذاهای ایرانی، لبنانی، ایتالیایی، هندی، ترکی، چینی و ... باز است.',
      },
      {
        id: 2,
        imgCard: card2,
        titleCard: 'تحول سریع',
        textCard:
          'بدون فوت وقت در ترافیک یا انتظار پشت تلفن، شام یا ناهار دلخواه را همراه با مخلفات، آنلاین سفارش دهید.',
      },
      {
        id: 3,
        imgCard: card3,
        titleCard: 'پشتیبانی تمام وقت',
        textCard:
          'تیم اسنپ هر روز هفته، به‌صورت شبانه‌روزی، پاسخ‌گوی سؤالات و مشکلات احتمالی است.',
      },
    ],
  }

  const dataSection = {
    requestData: [
      {
        number: 0,
        id: 'request-1',
        img: foodRequest1,
        title: 'شروع سفارش و انتخاب غذا',
        name: 'انتخاب نوع غذا',
        text:
          'پایین صفحه اصلی سوپراپ، گزینه غذا را بزنید. سپس برای مشاهده رستوران‌های اطراف، آدرس‌تان را وارد کنید. حالا غذای موردنظرتان را بالای صفحه بنویسید یا گزینه رستوران را بزنید. راه آسان‌تر این است که در بخش دسته‌بندی‌ها، نوع غذا را مشخص کنید. از فودپارتی، جایزه خرید یا تخفیف‌ها هم غافل نشوید.',
      },
      {
        number: 1,
        id: 'request-2',
        img: foodRequest2,
        title: 'پیدا کردن رستوران دلخواه',
        name: 'انتخاب رستوران',
        text:
          'با انتخاب نوع غذا یا ورود به لیست رستوران‌ها، تعداد رستوران‌های باز را می‌بینید. به‌کمک فیلترهای بالای صفحه، می‌توانید دسته‌بندی غذا را جزئی‌تر هم بکنید، مثلاً مرغ یا خورش. با انتخاب گزینه «به ترتیب»، رستوران‌ها را براساس قیمت، امتیاز کاربران، عملکرد کلی و... مرتب کنید تا بتوانید بهتر تصمیم بگیرید.',
      },
      {
        number: 2,
        id: 'request-3',
        img: foodRequest3,
        title: 'بررسی منو، انتخاب غذا و نوشتن توضیحات ',
        name: 'انتخاب غذای دلخواه',
        text:
          'در منوی رستوران، غذا و مخلفات موردنظرتان را انتخاب کنید. با گزینه «افزودن»، تعداد سفارش و موارد دلخواه مثل پک قاشق و چنگال را مشخص کنید. با زدن گزینه «تکمیل خرید»، در صفحه جدید، توضیحات دلخواه‌تان را بنویسید، مثلاً ظرف خورش داخل برنج نباشد. سپس گزینه «ادامه» را بزنید.',
      },
    ],
    dataCard: [
      {
        id: 1,
        title: 'انواع غذاهای ایرانی و فرنگی',
        text:
          'در اسنپ تا دلتان بخواهد، رستوران ایرانی و فرنگی هست: از انواع کباب‌ها و خورش‌ها و غذاهای دریایی گرفته تا سینی‌های محلی مانند کباب ترش با همان دستور پخت اصیل تا انواع ‌وعده‌های محلی مثل آش دوغ تبریز و قیمه نثار قزوین. امتحان‌کردن طعم‌های بین‌المللی هم فکر خوبی است. اسپرینگ‌رول سبزیجات دوست دارید یا ترکیب ماهی سالمون با آووکادو و برنج در قالب سوشی؟ عاشق دونر کباب ترکی با سس سیر و گوشت هستید یا پاستای ایتالیایی؟ فست‌فود می‌پسندید؟ انواع پیتزا، برگر یا ساندویچ‌های سرد گزینه‌های جذابی هستند که می‌توانید با اسنپ سفارش بدهید.',
      },
      { id: 2, type: 'video', source: foodVideo },
      {
        id: 3,
        title: 'سفارش بدون هزینه اضافی',
        text:
          'جلب رضایت مشتری یعنی اختلاف قیمت خرید حضوری و آنلاین آن‌قدر کم است که اصلا نمی‌ارزد راهی رستوران شوید! این دقیقا اتفاقی است که اسنپ رقم می‌زند. بدون دردسر و معطلی و هزینه‌های اضافی، سفارشتان را درب منزل تحویل می‌گیرید. هزینه خرید آنلاین نه‌تنها تفاوتی با خرید حضوری ندارد بلکه فرصت بهره‌مندی از تخفیف‌های هیجان‌انگیز هم برایتان فراهم می‌شود. حالا تصور کنید یک رستوران ارسال رایگان هم داشته باشد و بدون پرداخت هیچ‌گونه هزینه پیک، ناهارتان را درب منزل دریافت کنید! البته معمولا هزینه پیک مقرون‌به‌صرفه است و می‌ارزد به دود و دم شهرهای بزرگ.',
      },
    ],
    color: '#ff00a6',
  }

  const questionData = [
    {
      id: 0,
      active: false,
      title: 'تحویل سفارش غذا چقدر زمان می‌برد؟',
      answer:
        'زمان تحویل سفارش متغیر است اما اسنپ‌ سعی می کند در سریع‌ترین زمان ممکن سفارش شما ‏را تحویل ‌دهد.‏',
    },
    {
      id: 1,
      active: false,
      title: 'از چه راه‌هایی می‌توان هزینه سفارش غذا را پرداخت کرد؟',
      answer:
        'کاربران می‌توانند از سه طریق مختلف از جمله حضوری، اعتباری و آنلاین مبلغ سفارش خود را ‏پرداخت کنند.‏',
    },
    {
      id: 2,
      active: false,
      title: 'آیا می‌توان در یک ثبت سفارش از چند رستوران غذا تهیه کرد؟',
      answer:
        'در هر سفارش می‌توان تنها از یک رستوران ثبت ‏سفارش داشت. اما برای سفارش از رستوران‌های بیشتر، پس از ثبت سفارش اول خود می‌توانید ‏سفارش جدیدی از رستورانی دیگر داشته باشید.',
    },
    {
      id: 3,
      active: false,
      title: 'از کجا کد تخفیف دریافت کنم؟',
      answer:
        'تخفیف‌ها با توجه به کمپین‌های مختلف در اختیار مشتریان قرار می‌گیرند. از طریق اسنپ کلاب هم ‏می‌توانید تخفیف‌های تفکیک شده برای خدماتی نظیر سفارش غذا، کیک و شیرینی و نانوایی را ‏دریافت کنید. همچنین بسته‌های خدماتی در راستای کاهش هزینه‌های سفارش‌های شما نیز ارایه شده است.',
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
      title: 'چگونه برای سفارش غذا اقدام کنم؟',
      answer:
        'پس از نصب سوپراپ اسنپ و وارد شدن به آن، آیکن غذا را انتخاب کنید.‏',
    },
  ]

  const dataFooter = {
    img: foodFooter,
    icon: food,
    title: 'غذا همیشه حاضر است!',
    text:
      'ناهار خانگی دوست دارید یا شام فست‌فودی؟ گوشت لذیذ یا سالادهای رنگارنگ؟ خرید آنلاین غذا را با اسنپ تجربه کنید و در کوتاه‌ترین زمان و با بسته‌بندی مناسب، درب منزل یا محل کارتان تحویل بگیرید. تابلوی «غذا حاضر است» همیشه به سردر رستوران‌های اسنپ آویخته شده است!',
    button: 'غذا سفارش دهید',
  }

  const categoriesData = {
    data: [
      { id: 0, name: 'نانوایی', img: bakery, slug: '/bakery' },
      { id: 1, name: 'آبمیوه و بستنی', img: icecream, slug: '/juice-icecream' },
      { id: 2, name: 'کافه', img: cafe, slug: '/cafe' },
      { id: 3, name: 'شیرینی', img: sweets, slug: '/confectionery' },
      { id: 4, name: 'رستوران', img: restaurant },
      { id: 5, name: 'پروتئین', img: protein },
      { id: 6, name: 'آجیل', img: nuts },
      { id: 7, name: 'میوه', img: fruit },
    ],
    bgc: '#ffffff',
    title: 'دسته بندی ها',
    width: '130px',
    height: '70px',
    cardBgc: '#f5f5f6',
  }

  const articleData = {
    items: [
      { id: 0, img: Shila },
      { id: 1, img: Perperook },
      { id: 2, img: Baguette },
      { id: 3, img: Hani },
      { id: 4, img: Procalory },
      { id: 5, img: Raftari },
      { id: 6, img: BurgerLand },
      { id: 7, img: Bergur1385 },
    ],
    title: 'پرطرفدارترین رستوران ها',
    cards: [
      {
        id: 0,
        bgc: '#ffffff',
        title: '',
        text:
          'با وجود دنیایی از غذاهای ایرانی و غیرایرانی که در منوی رستوران‌ها می‌بینید، انواع فست‌فودها، ساندویچ‌ها و غذاهای محلی و بین‌المللی که آماده سفارش هستند؛ بعضی‌ها هم که از قدیم پرطرفدار بوده‌اند و هنوز هم مشتریان همیشگی دارند. مثلا از میان منوهای سنتی، کباب‌ها و از میان فست‌فودها، انواع برگر با استقبال بیشتری روبه‌رو می‌شوند. پیتزا مثل همیشه در صدر فهرست پرطرفدارترین‌هاست و کودک و جوان عاشقش هستند. حتی این‌روزها که سبک زندگی تغییر کرده و علاقه به سالم‌خوری بیشتر از قبل شده، خیلی از مخاطبان اسنپ برای وعده‌های اصلی سراغ سالادهای مختلف می‌روند که جای تحسین دارد.',
      },
      {
        id: 1,
        bgc: '#f5f5f6',
        title: 'رستوران‌های اطراف شما',
        text:
          'این روزها شمار رستوران‌های هر شهر و منطقه به‌قدری زیاد شده که گاهی حسابشان از دستمان در می‌رود. گذشته از این، پیداکردن رستوران‌های خوب در شهرهای نا‌آشنا کار راحتی نیست. با اسنپ فرقی نمی‌کند برای سفارش اینترنتی غذا تهران هستید یا در کیش و مشهد و اصفهان دنبال رستوران می‌گردید. وارد اپلیکیشن می‌شوید، نشانی خود را وارد می‌کنید و فهرستی از رستوران‌ها، فست‌فودی‌ها و کیترینگ‌های اطراف‌تان به شما نمایش داده می‌شود. هرجا که هستید، حتی اطراف محل کارتان، رستوران‌های باکیفیتی هستند که عضو اسنپ باشند. یادتان هست گفتیم وقت طلاست و اسنپ این را خوب می‌داند؟ با خرید از رستوران‌های اطراف کمتر انتظار می‌کشید و سفارش سریع‌تر تحویل شما داده می‌شود. حتی می‌توانید برای دیگران هم غذا بفرستید. نشانی‌ هرکس را که دوست دارید در اپلیکیشن وارد کنید و تمام! تحویل را به اسنپ بسپارید.',
      },
      {
        id: 2,
        bgc: '#ffffff',
        title: 'تخفیف‌های هیجان‌انگیز اسنپ',
        text:
          'دنبال خرید به‌صرفه هستید؟ اسنپ ایده جالبی برای تخفیف‌هایش در نظر گرفته که همه می‌توانند از آن استفاده کنند. تنها شرطش نصب برنامه و شروع خرید است. هر بار که از خدمات این سوپراپلیکیشن استفاده می‌کنید، امتیازی برایتان ثبت می‌شود. این امتیازها در باشگاه مشتریان تبدیل به کدهای تخفیف می‌شوند و می‌توانید برای خدمات بعدی اسنپ، از آنها استفاده کنید. کافی است کد تخفیف را هنگام نهایی‌کردن خرید وارد کنید تا تخفیف به‌طور خودکار روی قیمت اعمال شود. راجع به برنامه‌ها و کمپین‌های تخفیفی اسنپ چقدر شنیده‌اید؟ اسم فودپارتی اسنپ تابه‌حال به‌گوشتان خورده است؟ با این ویژگی هیجان‌انگیز، بدون واردکردن کد تخفیف از پیشنهادهای ویژه متنوع و همیشگی استفاده کنید. در صفحه سفارش غذا، فیلترهای دارای کوپن و دارای تخفیف را انتخاب کنید تا تمام غذاهای تخفیف‌دار فودپارتی به شما نمایش داده شود. این فرصت محدود نیست و همیشه برنامه‌های تخفیفی و کوپن‌هایی برای خرید با تخفیف وجود دارند.',
      },
      {
        id: 3,
        bgc: '#f5f5f6',
        title: 'آشنایی با شیوه پرداخت اعتباری',
        text:
          'در سوپراپلیکیشن اسنپ می‌توانید سفارش‌تان را دریافت کنید و بعدا هزینه‌اش را بپردازید. به هیچ مدرک و ضمانتی هم احتیاج ندارید. ضمانت شما میزان اعتباری است که به‌خاطر خریدهای قبلی در اسنپ دارید. نگاهی به اعتبارتان بیندازید، براساس آن خرید کنید و تسویه‌حساب را به پایان ماه موکول کنید. البته این‌طور نیست که آخر ماه، آخرین فرصت تسویه‌حساب باشد. اسنپ تا ۵ روز بعد از پایان ماه به شما فرصت می‌دهد بدهی‌های ماه گذشته را پرداخت کنید. نگران فراموش‌کردن تسویه‌حساب هم نباشید. اعلانات اسنپ آخر هر ماه شما را در جریان صورت‌حسابتان قرار می‌دهد.',
      },
      {
        id: 4,
        bgc: '#ffffff',
        title: 'امکان پیگیری لحظه‌ای سفارش',
        text:
          'این حق شماست که بعد از درخواست اینترنتی غذا، بدانید سفارشتان هر لحظه کجا و در چه مرحله‌ای است. اسنپ پس از ثبت درخواست، مدت‌زمان تقریبی آماده‌سازی را به شما اعلام می‌کند و به آن پایبند می‌ماند. اعلان‌هایی که از اپلیکیشن دریافت می‌کنید، کاملا گویای جریان آماده‌سازی سفارش هستند. وقتی بسته شما به پیک سپرده می‌شود، نام و شماره تلفن و مسیر حرکت او روی نقشه برایتان به ‌نمایش درمی‌آید. در خانه نشسته‌اید، قهوه‌تان را نوش جان می‌کنید و می‌بینید که پیک از کدام مسیر و با چه سرعتی به‌سمت شما حرکت می‌کند.',
      },
    ],
  }

  const foodCategoriesData = {
    data: [
      { id: 0, name: 'ایرانی', img: irani },
      { id: 1, name: 'فست فود', img: fastfood },
      { id: 2, name: 'کباب', img: kabab },
      { id: 3, name: 'پیتزا', img: pitza },
      { id: 4, name: 'برگر', img: burger },
      { id: 5, name: 'ساندویچ', img: sandwich },
      { id: 6, name: 'سوخاری', img: fry },
      { id: 7, name: 'پاستا', img: pasta },
      { id: 8, name: 'سالاد', img: salad },
      { id: 9, name: 'دریایی', img: sea },
      { id: 10, name: 'بین المللی', img: intl },
      { id: 11, name: 'گیلانی', img: gilaki },
    ],
    bgc: '#f5f5f6',
    title: 'انواع غذاها',
    width: '200px',
    height: '100px',
    cardBgc: '#f5f5f6',
  }

  return (
    <div>
      <Layout id='0'>
        <Slider dataSlider={dataSlider} />
        <IconBar />
        <Categories categoriesData={categoriesData} />
        <Categories categoriesData={foodCategoriesData} />
        <Banner dataBanner={dataBanner} />
        <Section dataSection={dataSection} />
        <Article articleData={articleData} />
        <FrequentlyQuestion questionData={questionData} />
        <BannerFooter dataFooter={dataFooter} />
      </Layout>
    </div>
  )
}

export default OnlineFood
