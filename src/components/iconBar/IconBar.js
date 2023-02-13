import React from 'react';

//image
import bazaar from './../../assets/img/bazaar.png'
import iApps from './../../assets/img/iApps.png'
import directDownload from './../../assets/img/direct-download-badge.png'
import sibapp from './../../assets/img/sibapp-badge-white.png'
import snapp from './../../assets/img/snapp-pwa.png'

//style
import styles from './IconBar.module.css'

const IconBar = () => {
    return (
        <div className={styles.iconContainer}>
            <figure className={styles.iconItem}>
                <img src={bazaar} alt='bazzar' />
            </figure>
            <figure className={styles.iconItem}>
                <img src={iApps} alt='iApps' />
            </figure>
            <figure className={styles.iconItem}>
                <img src={directDownload} alt='directDownload' />
            </figure>
            <figure className={styles.iconItem}>
                <img src={sibapp} alt='sibapp' />
            </figure>
            <figure className={styles.iconItem}>
                <img src={snapp} alt='snapp' />
            </figure>
        </div>
    );
};

export default IconBar;