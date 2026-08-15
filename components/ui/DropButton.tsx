import styles from './DropButton.module.css'

import {formatMilfos} from '@/utils/formatMilfos'

import mPoints from "../../public/points/mpoints.png"
import mPointsRed from '../../public/points/mpoints2Red.png'

import Image from 'next/image';

import { StaticImageData } from "next/image";

export default function Drop ({dropId, dropImage, dropName, dropCost, dropActive, dropLevel, buyOrUpdateDrop}: {dropId: number, dropImage: string | StaticImageData, dropName: string, dropCost: number, dropActive: boolean, dropLevel: number, buyOrUpdateDrop: () => void}) {
    const buttonStatus = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const priceResponsive = dropActive != true ? "???" : formatMilfos(dropCost);
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <button className={styles.dropButton} onClick={() => buyOrUpdateDrop()}>
            <div className={styles.dropLevel}>
                <p>{levelResponsive}</p>
            </div>
            <div className={buttonStatus}>
                <p>{formatMilfos(dropCost)}</p>
                <Image src={mPoints} alt="" />
            </div>
            <div className={styles.dropInfo}>
                <div className={styles.dropImg}>
                    <Image src={dropImage} height={300} width={500} alt="" className={styles.imageDrop} />
                </div>
                <div className={styles.dropNames}>
                    <p>{nameResponsive}</p>
                    <div className={styles.unknownLevel}>
                        <p className={styles.unknownLevelp}>{priceResponsive}</p>
                        <Image src={mPointsRed} alt="" width={24} height={24} />
                    </div>
                </div>
            </div>

        </button>
    )
}