import {useState} from 'react'

import Image, { StaticImageData } from 'next/image'

import mPoints from '../../public/points/mpoints.png'

import styles from './BoosterButton.module.css'

export default function PointsButton({ boosterImage, boosterCost, boosterActive, handleClickButton}: {key: number, boosterImage: string | StaticImageData, boosterCost: number, boosterActive: boolean, handleClickButton: () => void}) {
    return(
        <button 
            onClick={handleClickButton}
            className={styles.boosterButton}
        >
            <Image 
                className={`${styles.buttonImage} ${boosterActive ? styles.buttonActive : styles.buttonInactive}`} 
                src={boosterImage} height={70} width={70}
                alt="Imagen Milfo" 
            />
            <div className={styles.message}>
                <span>{boosterCost}</span><Image className={styles.batidoCoin} src={mPoints} alt="" height={24} width={24} />
            </div> 
        </button>
    )
}