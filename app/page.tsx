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

  useEffect(() => {
    const audio = new Audio('/songs/background_song1.mp3');
    audio.loop = true;
    audio.volume = 0.0;
    const startAfterInteraction = () => {
      window.removeEventListener('pointerdown', startAfterInteraction);
      window.removeEventListener('keydown', startAfterInteraction);
      void audio.play().catch((error: unknown) => {
        console.error('No se pudo reproducir la música de fondo.', error);
      });
    };

    void audio.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        window.addEventListener('pointerdown', startAfterInteraction);
        window.addEventListener('keydown', startAfterInteraction);
        return;
      }

      console.error('No se pudo reproducir la música de fondo.', error);
    });

    return () => {
      window.removeEventListener('pointerdown', startAfterInteraction);
      window.removeEventListener('keydown', startAfterInteraction);
      audio.pause();
    };

  }, []);

  return (
    <main className={styles.sectionMain}>
      <Header />
      <DropsSection />
      <MilfoSection />
      <UpgradesSection />
    </main>
  )
}
