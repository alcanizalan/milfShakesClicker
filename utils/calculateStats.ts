import { DropType, BoosterType } from '../types/game'

import { dropsData } from '../data/dropsData'
import { boosterData } from '../data/boostersData'


export function calculateMilfosPerSecond(drops: DropType[]): number{
    let MPS: number = 0;

    dropsData.forEach((drop) => {
        if(drop.level > 0){
            MPS = MPS + (drop.level * drop.autoGain)
        }
    })
    console.log("MPS: ", MPS)
    return MPS;
}


export function calculateMilfosPerClick(): number{
    let MPC: number = 1;

    boosterData.forEach((booster) => {
        if(booster.active == true){
            MPC = MPC * 2
        }
    })
    console.log("MPC: ", MPC)
    return MPC;
}