import {useEffect} from 'react'

import { useGameStore } from '@/store/useGameStore'

export function useGameLoop(){
    const addPasiveMilfos = useGameStore((state) => state.addPasiveMilfos);

    useEffect(() => {
        const interval = setInterval (() => {
            const MPS = useGameStore.getState().MPS();
            addPasiveMilfos(MPS)
        }, 100)
    })
}