import { DropType, BoosterType } from '../types/game'

import { boosterData } from '../data/boostersData'


export function calculateMilfosPerSecond(drops: DropType[]): number{
    let MPS: number = 0;

    drops.forEach((drop) => {
        if(drop.level > 0){
            MPS = MPS + (drop.autoGain * drop.level);
        }
    })
    return MPS;
}


export function calculateMilfosPerClick(boosters: BoosterType[]): number{
    let MPC: number = 1;

    boosters.forEach((booster) => {
        if(booster.active == true){
            MPC = MPC * 2
        }
    })
    return MPC;
}