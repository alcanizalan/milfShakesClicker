import styles from './DropButton.module.css'

import {formatMilfos} from '@/utils/formatMilfos'

import mPoints from "../../public/points/mpoints.png"
import mPointsRed from '../../public/points/mpoints2Red.png'

import Image from 'next/image';

export default function Drop ({dropId, dropImage, dropName, dropCost, dropActive, dropLevel, buyOrUpdateDrop}: {dropId: number, dropImage: string, dropName: string, dropCost: number, dropActive: boolean, dropLevel: number, buyOrUpdateDrop: () => void}) {
    const buttonClass = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const priceResponsive = dropActive != true ? "???" : formatMilfos(dropCost);
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <button className={styles.divLevels} onClick={buyOrUpdateDrop}>
            <div className={buttonClass}>
                <p>{formatMilfos(dropCost)}</p>
                <Image src={mPoints} alt="" />
            </div>
            <div className={styles.level}>
                <p>{levelResponsive}</p>
            </div>
            <div className={styles.dropImg}>
                <Image src={dropImage} fill alt="" className={styles.imageDrop} />
            </div>
            <div className={styles.dropNames}>
                <p>{nameResponsive}</p>
                <div className={styles.unknownLevel}>
                    <p className={styles.unknownLevelp}>{priceResponsive}</p>
                    <Image src={mPointsRed} alt="" className={styles.unknownLevelImg} />
                </div>
            </div>
        </button>
    )
}