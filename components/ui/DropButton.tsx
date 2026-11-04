import styles from './DropButton.module.css'

import {formatMilfos} from '@/utils/formatMilfos'

import mPoints from "../../public/points/mpoints.png"
import mPointsRed from '../../public/points/mpoints2Red.png'

import Image from 'next/image';

import { StaticImageData } from "next/image";
import { motion } from 'motion/react';

export default function Drop ({dropId, dropImage, dropName, dropCost, dropActive, dropLevel, buyOrUpdateDrop}: {dropId: number, dropImage: string | StaticImageData, dropName: string, dropCost: number, dropActive: boolean, dropLevel: number, buyOrUpdateDrop: () => void}) {
    const buttonStatus = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const priceResponsive = dropActive != true ? "???" : formatMilfos(dropCost);
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <motion.button 
        className={styles.dropButton} onClick={() => buyOrUpdateDrop()}
        whileHover={{scale: 1.1, rotate: [5, -5, 5]}}
        whileTap={{scale: 0.9}}
        transition={{
            rotate: { duration: 0.7, repeat: Infinity },
            scale: { duration: 0.2 },
        }}>
            <div className={styles.dropLevel}>
                <p>{levelResponsive}</p>
            </div>
            <div className={buttonStatus}>
                <p>{formatMilfos(dropCost)}</p>
                <Image height={32} width={32} className={styles.imagePoints} src={mPoints} alt="" />
            </div>
            <div className={styles.dropInfo}>
                <div className={styles.dropImg}>
                    <Image src={dropImage} height={300} width={500} alt="" className={styles.imageDrop} />
                </div>
                <div className={styles.dropNames}>
                    <p>{nameResponsive}</p>
                    <div className={styles.unknownLevel}>
                        <p className={styles.unknownLevelp}>{priceResponsive}</p>
                        <Image className={styles.imagePoints} src={mPointsRed} alt="" width={24} height={24} />
                    </div>
                </div>
            </div>

        </motion.button>
    )
}