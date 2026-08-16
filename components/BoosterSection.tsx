import {useState} from 'react'
import Image from 'next/image'
import { useGameStore } from '@/store/useGameStore'


import styles from './BoosterSection.module.css'

import { BoosterType } from '@/types/game'

import BoosterButton from './ui/BoosterButton'

export default function BoosterSection () {
    const boosters = useGameStore((state) => state.boosters);

    return(
        <section className={styles.boosterSection}>
            <div className={styles.blocked}>
                <Image src="/icons/lock_icon.svg" alt="Locked" width={42} height={42} />
            </div>
            {
                boosters.map((booster: BoosterType) => {
                    return(
                        <BoosterButton
                            key={booster.id}
                            boosterImage={booster.image}
                            boosterCost={booster.cost}
                            boosterActive={booster.active}
                            handleClickButton={() => useGameStore.getState().buyBooster(booster.id)}
                        />
                    )
                })
            }
        </section>
    )
}