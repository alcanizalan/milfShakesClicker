"use client"
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import DropsSection from '../components/DropSection'
import MilfoSection from '../components/MilfoSection'
import UpgradesSection from '../components/BoosterSection'
import Login from '../components/Login'

import styles from './page.module.css'

const PPC: number = 100;

export default function Main() {
  const [alternarLogin, setAlternarLogin] = useState(true);

  return (
    <div className={styles.sectionMain}>
      <Login alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <Header alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <DropsSection 
        />
      <MilfoSection />
      <UpgradesSection />
    </div>
  )
}
