import {useEffect} from 'react'

import { useGameStore } from '@/store/useGameStore'
import { calculateMilfosPerSecond } from '@/utils/calculateStats';

export function useGameLoop(){
    const addPasiveMilfos = useGameStore((state) => state.addPasiveMilfos);
    const MPS = useGameStore((state) => state.MPS);
    const drops = useGameStore((state) => state.drops);

    useEffect(() => {
        const interval = setInterval (() => {
            addPasiveMilfos(MPS());
        }, 1000)

        return () => clearInterval(interval)
    }, [])
}