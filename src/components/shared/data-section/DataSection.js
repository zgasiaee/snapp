import React from 'react';

//style
import styles from './DataSection.module.css'

const DataSection = () => {
    return (
        <div className={styles.dataContainer}>
           <div className={styles.dataBox}>
              <h4>همکاری با اسنپ کلاب</h4>
              <p>در صورت تمایل به همکاری با اسنپ کلاب و قرارگرفتن کد تخفیف محصولات تان در لیست تخفیف های اسنپ کلاب، با ما در ارتباط باشید</p>
              <span>snappclub.partners@snapp.cab</span>
           </div>
        </div>
    );
};

export default DataSection;