"use client"
import { useState } from 'react'
import { thousandSuffixes } from '../utils/suffixes.js'
import { formatCost } from '../utils/formatCost.js'

export function useClickPoints(){
    const formatedPoints = formatCost(milfoPoints, thousandSuffixes);
    const [isScaled, setIsScaled] = useState(false);

    const handleClick = () => {
        setMilfoPoints(milfoPoints + PPC)
        setIsScaled(true);
        const clickSound = new Audio('src/assets/sounds/pop.mp3');
        clickSound.play();
        setTimeout(() => {
            setIsScaled(false);
        }, 100);
    }
}