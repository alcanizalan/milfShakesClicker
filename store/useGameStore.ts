import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { calculateMilfosPerClick, calculateMilfosPerSecond } from '@/utils/calculateStats';
import { useGameLoop } from '@/hooks/useGameLoop';
import {dropsData as INITIAL_DROPS} from '@/data/dropsData';
import {boosterData as INITIAL_BOOSTERS} from '@/data/boostersData';
import {BoosterType, DropType} from '@/types/game';

interface GameState {
    milfos: number;
    boosters: BoosterType[];
    drops: DropType[];
    totalLevels: number;

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
            totalLevels: 0,

            MPC: () => calculateMilfosPerClick(get().boosters),
            MPS: () => calculateMilfosPerSecond(get().drops),

            //clickMilfo: () => set((state) => ({milfos: state.milfos + get().MPC()})),
            clickMilfo: () => set((state) => ({milfos: state.milfos + get().MPS()+1})),

            addPasiveMilfos: (MPS) => {
                set((state) => {
                    return {milfos: state.milfos + MPS};
                });
            },

            buyBooster: (booster_id) => {
                const {milfos, boosters} = get();
                const boosterComprado = boosters.find(booster => booster.id === booster_id);
                
                if (!boosterComprado) return false;
                if (milfos < boosterComprado.cost) return false;

                set((state) => {
                    const updatedBooster = state.boosters.map((booster) => {
                        if (booster.id !== booster_id) return booster;
                        if (booster.active) return booster;

                        return {
                            ...booster,
                            active: true,
                        }
                    })

                    return {
                        milfos: state.milfos - boosterComprado.cost,
                        boosters: updatedBooster,
                    }
                })

                return true;
            },

            buyDrop: (drop_id) => {
                const {milfos, drops, totalLevels} = get();
                const dropComprado = drops.find(drop => drop.id === drop_id);

                if (!dropComprado) return false;
                if (milfos < dropComprado.cost) return false;

                set((state) => {
                    const updatedDrops = state.drops.map((drop) => {
                        if (drop.id !== drop_id) return drop;

                        if (!drop.active) {
                            return {
                                ...drop,
                                active: true,
                                level: drop.level + 1,
                                cost: Math.round(drop.cost * 1.15),
                            };
                        }

                        return {
                            ...drop,
                            level: drop.level + 1,
                            cost: Math.round(drop.cost * 1.15),
                        };
                    });


                    calculateMilfosPerSecond(updatedDrops);
                    return {
                        milfos: state.milfos - dropComprado.cost,
                        drops: updatedDrops,
                        totalLevels: totalLevels + 1,
                    };
                });

                return true;
            },

            resetGame: () => set({
                milfos: 0,
                boosters: INITIAL_BOOSTERS,
                drops: INITIAL_DROPS,
                totalLevels: 0,
            })
            
        }),
        {
            name: 'milfshakes-game-clicker',
            storage: createJSONStorage(() => localStorage),
        }
    )
)