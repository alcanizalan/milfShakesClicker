"use client"
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import DropsSection from '../components/DropSection'
import MilfoSection from '../components/MilfoSection'
import UpgradesSection from '../components/BoosterSection'
import Login from '../components/Login'

import { useGameStore } from '@/store/useGameStore'
import { useGameLoop } from '@/hooks/useGameLoop'

import styles from './page.module.css'

const PPC: number = 100;

export default function Main() {
  const addPasiveMilfos = useGameStore((state) => state.addPasiveMilfos);
  const [alternarLogin, setAlternarLogin] = useState(true);

  useGameLoop();

  return (
    <div className={styles.sectionMain}>
      {/* <Login alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} /> */}
      <Header />
      <DropsSection />
      <MilfoSection />
      <UpgradesSection />
    </div>
  )
}
