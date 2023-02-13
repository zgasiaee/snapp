import React, { useState } from 'react'

//style
import styles from './Career.module.css'

//component
import Layout from '../shared/Layout'

const Career = () => {
  const careerData = [
    {
      id: 0,
      title: 'PHP Developer - SnappPay',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 1,
      title: 'Software Engineer- Platform (Java) ',
      text: 'Remote job',
      category: 'Tech',
    },
    {
      id: 2,
      title: 'Product Manager (Map)',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 3,
      title: 'Associate Product Manager (User)',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 4,
      title: 'Product Designer-SnappBox',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 5,
      title: 'NetDevOps Engineer',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 6,
      title: 'NOC Engineer (Datacenter)',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 7,
      title: 'Senior Product Manager',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 8,
      title: 'Technical Lead',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 9,
      title: 'Senior Wordpress Developer',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Operations',
    },
    {
      id: 10,
      title: 'Market Research Specialist',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Commercial',
    },
    {
      id: 11,
      title: 'Senior Data Analyst - SnappBox',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Commercial',
    },
    {
      id: 12,
      title: 'Operations Manager (Mashhad)',
      text: 'Mashhad, Iran, Islamic Republic of',
      category: 'Operations',
    },
    {
      id: 13,
      title: 'Senior Data Product Manager',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 14,
      title: 'Android Developer',
      text: 'Remote job',
      category: 'Tech',
    },
    {
      id: 15,
      title: 'Software Engineer (Golang/Python) ',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 16,
      title: 'HR Business Partner',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'HR',
    },
    {
      id: 17,
      title: 'Senior SysOps Engineer',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 18,
      title: 'Associate Product Manager (Matching)',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 19,
      title: 'Senior UX Researcher- SnappPay',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Product',
    },
    {
      id: 20,
      title: 'Growth Manager',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Commercial',
    },
    {
      id: 21,
      title: 'Site Reliability Engineer - SnappBox',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    { id: 22, title: 'BI Developer', text: 'Remote job', category: 'Tech' },
    {
      id: 23,
      title: 'Data Analyst (Financial )',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Finance',
    },
    {
      id: 24,
      title: 'Senior Data Analyst',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Operations',
    },
    {
      id: 25,
      title: 'Backend Software Engineer',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 26,
      title: 'Senior Business data analyst',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Commercial',
    },
    {
      id: 27,
      title: 'Strategic Market research Analyst',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Commercial',
    },
    {
      id: 28,
      title: 'B2B Sales Lead',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Marketing',
    },
    {
      id: 29,
      title: 'Senior Director-Engineering - SnappBox',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Tech',
    },
    {
      id: 30,
      title: 'Talent Acquisition Specialist',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'HR',
    },
    {
      id: 31,
      title: 'Senior CRM Analyst',
      text: 'Tehran, Iran, Islamic Republic of',
      category: 'Marketing',
    },
  ]

  const [category, setCategory] = useState('All')

  const itemHandler = (item) => {
    setCategory(item)
  }

  const match = careerData.filter((item) =>
    category == 'All' ? item.category : item.category === category,
  )

  return (
    <div>
      <Layout id="1">
        <div className={styles.careerContainer}>
          <div className={styles.aboutContainer}>
            <h1>ABOUT US</h1>
            <span>
              Snapp is the fastest-growing startup in Iran and is powered by a
              young team that wants to take Iran’s IT industry to the next
              level. We are always looking for young talent that wants to make a
              better tomorrow and have a positive impact on the lifestyle of
              people. Today we are proud to announce that Snapp is the first and
              biggest ride-hailing service in Iran with more than 30 million
              passengers and 2 million drivers in its fleet. We are always
              expanding the team to reach our ambitious objectives! So if you
              want to be a part of the best transportation in Iran, just Send
              your Resume.
            </span>
          </div>
          <div className={styles.titleText}>
            <h1>JOIN US</h1>
            <span> CURRENT OPENING </span>
          </div>
          <div className={styles.itemContainer}>
            <span
              className={category == 'All' ? styles.active : styles.item}
              onClick={() => itemHandler('All')}
            >
              All
            </span>
            <span
              className={category == 'Tech' ? styles.active : styles.item}
              onClick={() => itemHandler('Tech')}
            >
              Tech
            </span>
            <span
              className={category == 'Product' ? styles.active : styles.item}
              onClick={() => itemHandler('Product')}
            >
              Product
            </span>
            <span
              className={category == 'Operations' ? styles.active : styles.item}
              onClick={() => itemHandler('Operations')}
            >
              Operations
            </span>
            <span
              className={category == 'Commercial' ? styles.active : styles.item}
              onClick={() => itemHandler('Commercial')}
            >
              Commercial
            </span>
            <span
              className={category == 'HR' ? styles.active : styles.item}
              onClick={() => itemHandler('HR')}
            >
              HR
            </span>
            <span
              className={category == 'Finance' ? styles.active : styles.item}
              onClick={() => itemHandler('Finance')}
            >
              Finance
            </span>
            <span
              className={category == 'Marketing' ? styles.active : styles.item}
              onClick={() => itemHandler('Marketing')}
            >
              Marketing
            </span>
          </div>
          <div className={styles.cardContainer}>
            {match.map((career) => (
              <div className={styles.card} key={career.id}>
                <span className={styles.category}>{career.category}</span>
                <div className={styles.text}>
                  <h5>{career.title}</h5>
                  <p className={styles.lightText}>{career.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Career
