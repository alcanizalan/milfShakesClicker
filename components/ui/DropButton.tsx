import styles from './DropButton.module.css'

import {formatMilfos} from '@/utils/formatMilfos'

import mPoints from "../../public/points/mpoints.png"
import mPointsRed from '../../public/points/mpoints2Red.png'
import imgBackground from '@/public/ui/dropButton_pixel.png'
import imgdropLevelBackground from '@/public/ui/dropLevelBackground.png'


import Image from 'next/image';

import { StaticImageData } from "next/image";
import { motion } from 'motion/react';
import { useState } from 'react'

export default function Drop ({dropId, dropImage, dropName, dropCost, dropActive, dropLevel, buyOrUpdateDrop}: {dropId: number, dropImage: string | StaticImageData, dropName: string, dropCost: number, dropActive: boolean, dropLevel: number, buyOrUpdateDrop: () => void}) {
    const buttonStatus = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const priceResponsive = dropActive != true ? "???" : formatMilfos(dropCost);
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

        const [isHovered, setIsHovered] = useState(false);
    return(

            <motion.button
            className={styles.dropButton}
            onClick={() => buyOrUpdateDrop()}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? [5, -5, 5] : 0,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
                scale: {
                duration: 0.2,
                },
                rotate: {
                duration: 0.7,
                repeat: isHovered ? Infinity : 0,
                },
            }}
            >
            <div className={buttonStatus}>
                <p>{formatMilfos(dropCost)}</p>
                <Image height={32} width={32} className={styles.imagePoints} src={mPoints} alt="" />
            </div>
            <div className={styles.dropImageContainer}>
                <Image src={dropImage} height={300} width={500} alt="" className={styles.dropImage} />
            </div>
            <Image src={imgBackground} height={300} width={500} alt="" className={styles.backgroundImage} />
            
            <div className={styles.dropContent}>
                {dropActive && (
                    <div className={styles.dropLevelContainer}>
                        <div className={styles.dropLevel}>
                            <Image width={50} height={50} src={imgdropLevelBackground} alt="" className={styles.dropLevelBackground} />
                            <p>{levelResponsive}</p>
                        </div>
                    </div>
                )}
                <div className={styles.dropInfoContainer}>
                    <div className={styles.dropInfo}>
                        <div className={styles.dropNames}>
                            <p>{nameResponsive}</p>
                        </div>
                        <div className={styles.costUpgrade}>
                            <p className={styles.pCostUpgrade}>{priceResponsive}</p>
                            <Image className={styles.imagePoints} src={mPointsRed} alt="" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.button>
    )
}