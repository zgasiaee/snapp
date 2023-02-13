import React from 'react';

//component
import Category from './Category';

//style
import styles from './Categories.module.css'

const Categories = ({categoriesData:{data , bgc , title , width , height , cardBgc }}) => {


   
    return (
        <div className={styles.categoriesContainer} style={{backgroundColor : bgc}}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.categoryCardContainer}>
            {
                data.map(category => <Category name={category.name} img={category.img} cardBgc={cardBgc} slug={category.slug} key={category.id} width={width} height={height}/>)
            }
            </div>
        </div>
    );
};

export default Categories;