"use client"
import { useEffect, useState } from 'react'

import Header from '../components/shared/header/Header'
import DropsSection from '../components/shared/drops/DropSection'
import MilfoSection from '../components/shared/milfo/MilfoSection'
import UpgradesSection from '../components/shared/booster/BoosterSection'

import { useGameStore } from '@/store/useGameStore'
import { useGameLoop } from '@/hooks/useGameLoop'

import styles from './page.module.css'

const PPC: number = 100;

export default function Main() {
  const addPasiveMilfos = useGameStore((state) => state.addPasiveMilfos);
  const [alternarLogin, setAlternarLogin] = useState(true);

  useGameLoop();

  return (
    <main className={styles.sectionMain}>
      {/* <Login alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} /> */}
      <Header />
      <DropsSection />
      <MilfoSection />
      <UpgradesSection />
    </main>
  )
}
