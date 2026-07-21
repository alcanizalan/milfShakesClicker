import styles from './MilfoSection.module.css'

import milfoLayer1 from '../public/milfo/milfoclickv1_capa1.png'
import milfoLayer2 from '../public/milfo/milfoclickv1_capa2.png'
import milfoLayer3 from '../public/milfo/milfoclickv1_capa3.png'
import milfoLayer4 from '../public/milfo/milfoclickv1_capa4.png'
import milfoLayer5 from '../public/milfo/milfoclickv1_capa5.png'
import milfoLayer6 from '../public/milfo/milfoclickv1_capa6.png'


export default function MilfoSection ({milfoPoints, setMilfoPoints, PPC}) {
    return(
        <section className='sectionMilfo'>
            <div className='hitBox' onClick={handleClick}></div>
            <div className='sectionClickableMilfo'>
                <div id="divError">
                    <p id="pError"></p>
                </div>
                <img src={milfoLayer1} className={styles.milfoImg + " " + styles.milfoImg1} alt="" />
                <img src={milfoLayer2} className={`${styles.milfoImg} ${styles.milfoImg2} ${isScaled ? styles.scaled : ""}`} alt="" />
                <img src={milfoLayer3} className={styles.milfoImg + " " + styles.milfoImg3} alt="" />
                <img src={milfoLayer4} className={styles.milfoImg + " " + styles.milfoImg4} alt="" />
                <img src={milfoLayer5} className={styles.milfoImg + " " + styles.milfoImg5} alt="" />
                <img src={milfoLayer6} className={styles.milfoImg + " " + styles.milfoImg6} alt="" />
            </div>
            <div className={styles.sectionCounter}>
                <p id="milfo-points">{formatedPoints}</p>
                <img className={styles.milfoPoints} alt="" />
            </div>
        </section>
    )
}