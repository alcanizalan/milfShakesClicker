"use client"

import styles from './MilfoSection.module.css'

import milfoLayer1 from '../public/milfo/milfoclickv1_capa1.png'
import milfoLayer2 from '../public/milfo/milfoclickv1_capa2.png'
import milfoLayer3 from '../public/milfo/milfoclickv1_capa3.png'
import milfoLayer4 from '../public/milfo/milfoclickv1_capa4.png'
import milfoLayer5 from '../public/milfo/milfoclickv1_capa5.png'
import milfoLayer6 from '../public/milfo/milfoclickv1_capa6.png'
import milfoPointsIcon from '../public/points/mpoints.png'

import { calculateMilfosPerClick } from '@/utils/calculateStats'

import {useGameStore} from '@/store/useGameStore'
import { formatMilfos } from '@/utils/formatMilfos'
import usePlaySound from '@/hooks/usePlaySound'


import Image from 'next/image'

export default function MilfoSection () {
    const milfoPoints = useGameStore((state) => state.milfos);
    const clickMilfo = useGameStore((state) => state.clickMilfo);
    const MPC = useGameStore((state) => state.MPC);
    const handleClick = usePlaySound(clickMilfo)

    return(
        <section className={styles.sectionMilfo}>
            <div className={styles.hitBox} onClick={handleClick}></div>
            <div className={styles.sectionMilfoLayers}>
                <div className={styles.divError}>
                    <p className={styles.pError}></p>
                </div>
                <Image src={milfoLayer1} className={`${styles.milfoImg} ${styles.milfoImg1}`} alt="" />
                <Image src={milfoLayer2} className={`${styles.milfoImg} ${styles.milfoImg2}`} alt="" />
                <Image src={milfoLayer3} className={`${styles.milfoImg} ${styles.milfoImg3}`} alt="" />
                <Image src={milfoLayer4} className={`${styles.milfoImg} ${styles.milfoImg4}`} alt="" />
                <Image src={milfoLayer5} className={`${styles.milfoImg} ${styles.milfoImg5}`} alt="" />
                <Image src={milfoLayer6} className={`${styles.milfoImg} ${styles.milfoImg6}`} alt="" />
            </div>
            <div className={styles.sectionCounter}>
                <p className={styles.milfoPoints}>{milfoPoints}</p>
                <Image src={milfoPointsIcon}  alt="" height={24} width={24} />
            </div>
        </section>
    )
}