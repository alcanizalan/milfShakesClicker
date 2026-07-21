import { DropType, BoosterType } from '../types/game'

import { drops } from '../data/dropsData'

export function calculateMilfosPerSecond(drops: DropType[]): number{
    let MPS: number = 0;

    drops.forEach((drop) => {
        if(drop.level > 0){
            MPS = MPS + (drop.level * drop.autoGain)
        }
    })

    return MPS;
}

/*
export function calculateMilfosPerClick(boosters: BoosterType[]): number{

}
*/