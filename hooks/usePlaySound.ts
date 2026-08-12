"use client"

import { useCallback, useEffect, useRef } from "react"

export default function usePlaySound(clickMilfo: () => void) {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('/sounds/pop.mp3')
        audioRef.current.load()
    }, [])

    return useCallback(() => {
        clickMilfo()

        if (!audioRef.current) return

        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {
        })
    }, [clickMilfo])
}
