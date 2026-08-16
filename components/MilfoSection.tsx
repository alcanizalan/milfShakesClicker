"use client"

import { useState, useEffect } from 'react'

import { motion } from "motion/react"
import styles from './MilfoSection.module.css'

import FallingShake from './ui/FallingShake'

import {useGameStore} from '@/store/useGameStore'
import { formatMilfos } from '@/utils/formatMilfos'
import usePlaySound from '@/hooks/usePlaySound'


import Image from 'next/image'

export default function MilfoSection () {
    const milfoPoints = useGameStore((state) => state.milfos);
    const clickMilfo = useGameStore((state) => state.clickMilfo);
    const totalLevels = useGameStore((state) => state.totalLevels);
    const handleClick = usePlaySound(clickMilfo)
    const formattedMilfos = formatMilfos(milfoPoints);

    const visibleShakesCount = Math.min(totalLevels/5, 40);
    const shakesArray = Array.from({ length: visibleShakesCount });

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return(
        <section className={styles.sectionMilfo}>
            <div className={styles.hitBox} onClick={handleClick}></div>
            <div className={styles.sectionMilfoLayers}>
                <div className={styles.divError}>
                    <p className={styles.pError}></p>
                </div>
                <Image src={'/milfo/milfoclickv1_capa1.png'} className={`${styles.milfoImg} ${styles.milfoImg1}`} alt=""  width={700} height={700}/>
                <Image src={'/milfo/milfoclickv1_capa2.png'} className={`${styles.milfoImg} ${styles.milfoImg2}`} alt=""  width={700} height={700}/>
                {hasMounted && shakesArray.map((_, index) => (
                    <FallingShake key={index} />
                ))}
                <Image src={'/milfo/milfoclickv1_capa3.png'} className={`${styles.milfoImg} ${styles.milfoImg3}`} alt=""  width={700} height={700}/>
                <Image src={'/milfo/milfoclickv1_capa4.png'} className={`${styles.milfoImg} ${styles.milfoImg4}`} alt=""  width={700} height={700}/>
                <Image src={'/milfo/milfoclickv1_capa5.png'} className={`${styles.milfoImg} ${styles.milfoImg5}`} alt=""  width={700} height={700}/>
                <Image src={'/milfo/milfoclickv1_capa6.png'} className={`${styles.milfoImg} ${styles.milfoImg6}`} alt=""  width={700} height={700}/>
            </div>
            <div className={styles.sectionCounter} >
                <p className={styles.milfoPoints}>{formattedMilfos}</p>
                <Image src="/points/mpoints.png"  alt="" height={24} width={24} />
            </div>
        </section>
    )
}