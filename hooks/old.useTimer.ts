"use client"
import {useState, useEffect} from 'react'

import drops from '../data/dropsData'

export function useTimer(milfoPoints, setMilfoPoints){
    const [pointsAutoGain, setPointsAutoGain] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setMilfoPoints(prev => prev + pointsAutoGain);
        }, 1000);

        return () => clearInterval(timer);
    }, [pointsAutoGain]);  

    return (milfoPoints)
}