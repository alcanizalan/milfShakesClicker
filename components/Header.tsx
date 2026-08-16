import styles from './Header.module.css'
import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import {useGameStore} from '@/store/useGameStore'

import StatsButton from './(admin)/StatsButton'

export default function Header () {
    const drops = useGameStore((state) => state.drops);
    const resetGame = useGameStore((state) => state.resetGame);

    return(
        <header className={styles.headerAdvise}>
            <button className={styles.binButton} onClick={resetGame}>
                <Image src="/icons/bin_icon.png" alt="Bin Icon" width={24} height={24} className={styles.bin}/>
            </button>
            <div className={styles.statsButton}>
                <StatsButton />
            </div>
            <div className={styles.divMessageNotOfficial}>
                <span>NOT AN OFFICIAL M***SHAKES WEBPAGE</span><span className={styles.beta}>BETA</span>
            </div>

        </header>
    )
}