import styles from './DropButton.module.css'


export default function Drop ({dropImage, dropName, dropCost, dropActive, dropLevel, onClick, thousandSuffixes, formatCost}) {
    const buttonClass = dropActive ? styles.dropNotBlocked : styles.dropBlocked;

    const formatedCost = formatCost(dropCost, thousandSuffixes);

    const priceResponsive = dropActive != true ? "???" : formatedCost;
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <button className={styles.divLevels} onClick={onClick}>
            <div className={buttonClass}>
                <p>{formatedCost}</p>
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