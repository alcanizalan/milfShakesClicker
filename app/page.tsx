"use client"
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import DropsSection from '../components/DropsSection'
import MilfoSection from '../components/MilfoSection'
import UpgradesSection from '../components/BoosterSection'
import Login from '../components/Login'

import { useTimer } from '../hooks/old.useTimer'

import styles from './page.module.css'

const PPC: number = 100;

export default function Main() {
  const [alternarLogin, setAlternarLogin] = useState(true);
  const [milfoPoints, setMilfoPoints] = useState(0);

  const {milfoPoints} = useTimer(milfoPoints, setMilfoPoints)

  return (
    <div className={styles.sectionMain}>
      <Login alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <Header alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <DropsSection 
        milfoPoints={milfoPoints} 
        setMilfoPoints={setMilfoPoints} 
        pointsAutoGain={pointsAutoGain}
        setPointsAutoGain={setPointsAutoGain}
        />
      <MilfoSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} PPC={PPC}/>
      <UpgradesSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} />
    </div>
  )
}
