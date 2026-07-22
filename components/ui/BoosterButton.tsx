import {useState} from 'react'

import Image from 'next/image'

import mPoints from '../../public/points/mpoints.png'

import styles from './BoosterButton.module.css'

export default function PointsButton({ boosterImage, boosterCost, boosterActive, handleClickButton}: {key: number, boosterImage: string, boosterCost: number, boosterActive: boolean, handleClickButton: () => void}) {
    const [show, setShow] = useState(false)
    return(
        <div 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={styles.mensageBotones}
            onClick={handleClickButton}
        >
            <button title='mensaje' className={styles.shopItem}>
                <Image 
                    className={`${styles.imgShop}${boosterActive ? styles.buttonActive : ""}`} 
                    src={boosterImage} fill
                    alt="Imagen Milfo" 
                />
            </button>
            <div className={`${styles.message} ${show ? styles.show : ""}`}>
                <span>{boosterCost}</span><Image fill className={styles.costImg} src={mPoints} alt="" />
            </div> 
        </div>
    )
}