import React from 'react'

//component
import Layout from '../shared/Layout'

//style
import styles from './Register.module.css'

//img
import paperVector from '../../assets/img/paperVector.svg'
import walletVector from '../../assets/img/walletVector.svg'
import requirementsVector from '../../assets/img/requirementsVector.svg'
import car from '../../assets/img/car-taxi.svg'

const Register = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Layout id="4">
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <figure className={styles.imgContainer}>
              <img src={paperVector} alt="img" />
            </figure>
            <h3>شرایط پیوستن به ناوگان اسنپ!</h3>
            <p>- سه ماه از تاریخ صدور گواهینامه گذشته باشد.</p>
            <p>- یک گوشی هوشمند در اختیار داشته باشید.</p>
          </div>
          <div className={styles.card}>
            <figure className={styles.imgContainer}>
              <img src={walletVector} alt="img" />
            </figure>
            <h3>مزایای ثبت‌نام شما در اسنپ!</h3>
            <p>- درآمد تضمینی + ساعت کاری دلخواه</p>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.textBox}>
            <h2>تصاویر مدارک لازم برای ثبت‌نام :</h2>
            <p>- گواهینامه</p>
            <p>- بیمه‌نامه</p>
            <p>- عکس راننده</p>
            <p>
              - معاینه فنی (برای خودروهایی که ۴ سال از تاریخ تولید آن گذشته
              باشد)
            </p>
          </div>
          <figure className={styles.img}>
            <img src={requirementsVector} alt="info" />
          </figure>
        </div>
        <div className={styles.box}>
          <h3>نکات مهمی که قبل از ثبت‌نام در ناوگان اسنپ خودرو باید بدانید:</h3>
          <p> - این پنل ویژه ثبت‌نام رانندگان جدید است.</p>
          <p> - تمامی مدارک مورد نیاز متعلق به یک نفر باشد.</p>
          <p> - تصویر مدرک خوانا و واضح باشد.</p>
          <p>
            {' '}
            - در صورت خروج از پنل ثبت‌نام اینترنتی، با وارد کردن شماره موبایل
            خود می‌توانید از همان مرحله،‌ ثبت‌نام را ادامه دهید.
          </p>
          <p>
            {' '}
            - پس از ثبت‌نام و بررسی اطلاعات شما «کد فعال‌سازی حساب کاربری» از
            طریق پیامک برای‌تان ارسال می‌شود. ارسال این کد به منزله‌ی ثبت‌نام
            قطعی و فعال‌شدن حساب کاربری شماست.
          </p>
          <p>
            {' '}
            - توجه داشته باشید که فعال‌سازی و فرآیند بررسی حساب‌های متقاضیان در
            بازه‌ی زمانی تقریبی یک هفته‌ای انجام می‌پذیرد.
          </p>
          <p>
            {' '}
            - توجه داشته باشید که اسنپ تایید صلاحیت همه‌جانبه‌ی رانندگان را به
            پلیس نظارت بر اماکن عمومی ناجا سپرده است و پس از اتمام ثبت‌نام و
            ارائه‌ی مدارک، نتیجه‌ی درخواست تایید صلاحیت متقاضیان از طرف ناجا به
            شرکت اسنپ اعلام می‌شود.
          </p>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <h2>همین حالا ثبت‌نام کنید!</h2>
            <span>
              لطفاً شمارهٔ موبایلتان را وارد کنید تا بتوانیم کد تأیید را
              برای‌تان ارسال کنیم.
            </span>
            <input placeholder="شماره موبایل" />
            <span>
              پرکردن فرم ثبت‌نام به معنی موافقت با قوانین و مقررات اسنپ است.
            </span>
            <button>ثبت‌نام سواری‌، وانت و موتور</button>
          </div>
          <figure className={styles.imgContainer}>
            <img src={car} alt="car" />
          </figure>
        </div>
      </Layout>
    </div>
  )
}

export default Register
