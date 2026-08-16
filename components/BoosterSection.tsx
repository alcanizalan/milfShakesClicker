import {useState} from 'react'
import Image from 'next/image'
import { useGameStore } from '@/store/useGameStore'


import styles from './BoosterSection.module.css'

import { BoosterType } from '@/types/game'

import BoosterButton from './ui/BoosterButton'

export default function BoosterSection () {
    const boosters = useGameStore((state) => state.boosters);
    const buyNewBooster = useGameStore((state) => state.buyBooster);

    return(
        <section className={styles.boosterSection}>
            <div className={styles.blocked}>
                <Image src="/icons/lock_icon.png" alt="Locked" width={42} height={42} />
            </div>
            {
                boosters.map((booster: BoosterType, key: number) => {
                    return(
                        <BoosterButton
                            key={key}
                            boosterId={booster.id}
                            boosterImage={booster.image}
                            boosterCost={booster.cost}
                            boosterActive={booster.active}
                            handleClickButton={() => buyNewBooster(booster.id)}
                        />
                    )
                })
            }
        </section>
    )
}