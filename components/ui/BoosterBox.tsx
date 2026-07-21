
import Button from './PointsButton.js'

import styles from './SectionButtons.module.css'

export default function BoosterBox ({copyButton, setCopyButton, milfoPoints, setMilfoPoints}) {
    const handleClickButton = (key) => {
        const newButtons = [...copyButton]
        if(newButtons[key].active == false && newButtons[key].buttonCost <= milfoPoints){
            setMilfoPoints(milfoPoints - newButtons[key].buttonCost);
            newButtons[key].active = true
            setCopyButton(newButtons)
        }  
    }

    return(
        <section className={styles.containerForButtons}>
            {
            copyButton.map((button, key) => {
                return(
                    <PointsButton 
                        key={button.idButton}
                        handleClickButton={() => handleClickButton(key)}
                        idButton={button.idButton}
                        imgButton={button.imgButton}
                        activeButton={button.active}
                        costButton={button.buttonCost}
                    />
                )
            })
        }
    </section>
    )
}