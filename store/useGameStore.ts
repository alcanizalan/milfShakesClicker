import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { calculateMilfosPerClick, calculateMilfosPerSecond } from '@/utils/calculateStats';
import {dropsData as INITIAL_DROPS} from '@/data/dropsData';
import {boosterData as INITIAL_BOOSTERS} from '@/data/boostersData';
import {BoosterType, DropType} from '@/types/game';

interface GameState {
    milfos: number;
    boosters: BoosterType[];
    drops: DropType[];

    MPC: () => number;
    MPS: () => number;

    clickMilfo: () => void;
    addPasiveMilfos: (amount: number) => void;
    buyBooster: (booster_id: number, cost: number, MPC: number) => boolean;
    buyDrop: (drop_id: number) => boolean;
    resetGame: () => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            milfos: 0,
            boosters: INITIAL_BOOSTERS,
            drops: INITIAL_DROPS,

            MPC: () => calculateMilfosPerClick(),
            MPS: () => calculateMilfosPerSecond(get().drops),

            clickMilfo: () => set((state) => ({milfos: state.milfos + get().MPC()})),

            addPasiveMilfos: (MPS) => set((state) => ({milfos: state.milfos + MPS})),

            buyBooster: (booster_id, cost) => {
                const {milfos, boosters} = get();
                
            },

            buyDrop: (drop_id) => {
                const {milfos, drops} = get();

            },

            resetGame: () => set({
                milfos: 0,
                boosters: INITIAL_BOOSTERS,
                drops: INITIAL_DROPS,
            })
            
        }),
        {
            name: 'milfshakes-game-clicker',
            storage: createJSONStorage(() => localStorage),
        }
    )
)