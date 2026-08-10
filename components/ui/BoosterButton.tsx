import {useState} from 'react'

import Image, { StaticImageData } from 'next/image'

import mPoints from '../../public/points/mpoints.png'

import styles from './BoosterButton.module.css'

export default function PointsButton({ boosterImage, boosterCost, boosterActive, handleClickButton}: {key: number, boosterImage: string | StaticImageData, boosterCost: number, boosterActive: boolean, handleClickButton: () => void}) {
    const [show, setShow] = useState(false)
    return(
        <button 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={handleClickButton}
            className={styles.boosterButton}
        >
            <Image 
                className={`${styles.buttonImage} ${boosterActive ? styles.buttonActive : styles.buttonInactive}`} 
                src={boosterImage} fill
                alt="Imagen Milfo" 
            />
            <div className={`${styles.message} ${show ? styles.show : ""}`}>
                <span>{boosterCost}</span><Image fill className={styles.costImg} src={mPoints} alt="" />
            </div> 
        </button>
    )
}