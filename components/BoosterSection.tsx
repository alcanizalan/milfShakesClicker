import {useState} from 'react'
import BoosterBox from './ui/BoosterBox'
import { boosterBoxes } from '../data/boostersData'

import styles from './BoosterSection.module.css'

export default function BoosterSection ({milfoPoints, setMilfoPoints}) {
    const [copyButtons, setCopyButtons] = useState(boosterBoxes)

    return(
        <section className='sectionUpgrades'>
            {
                copyButtons.map((copyButton, key) => {
                    return(
                        <BoosterBox
                        copyButton={copyButton} 
                        setCopyButtons={setCopyButtons}
                        milfoPoints={milfoPoints} 
                        setMilfoPoints={setMilfoPoints}
                        key={key}
                        />
                    )
                })
            }
        </section>
    )
}