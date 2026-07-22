import styles from './DropButton.module.css'

import {formatMilfos} from '@/utils/formatMilfos'

export default function Drop ({dropId, dropImage, dropName, dropCost, dropActive, dropLevel, buyOrUpdateDrop}: {dropId: number, dropImage: string, dropName: string, dropCost: number, dropActive: boolean, dropLevel: number, buyOrUpdateDrop: () => void}) {
    const buttonClass = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const priceResponsive = dropActive != true ? "???" : formatMilfos(dropCost);
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <button className={styles.divLevels} onClick={buyOrUpdateDrop}>
            <div className={buttonClass}>
                <p>{formatMilfos(dropCost)}</p>
                <img src="../assets/mpoints.png" alt="" />
            </div>
            <div className={styles.level}>
                <p>{levelResponsive}</p>
            </div>
            <div className={styles.dropImg}>
                <img src={dropImage} alt="" />
            </div>
            <div className={styles.dropNames}>
                <p>{nameResponsive}</p>
                <div className={styles.unknownLevel}>
                    <p className={styles.unknownLevelp}>{priceResponsive}</p>
                    <img src='../assets/mpoints2Red.png' alt="" className={styles.unknownLevelImg} />
                </div>
            </div>
        </button>
    )
}