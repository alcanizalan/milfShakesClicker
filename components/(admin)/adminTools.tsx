"use client";
import { useGameStore } from "../../store/useGameStore";
import styles from './adminTools.module.css';



export default function AdminTools() {
  return (
    <div>
        <button onClick={() => useGameStore.getState().adminAddPoints(1000000)} className={styles.adminButton}>Add 1M Points</button>
        <button className={styles.adminButton}>Unlock All Levels</button>
    </div>
  );
}