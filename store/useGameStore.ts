import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface GameState {
    milfos: number;
    purchasedBoosters: number[];
    purchasedDrops: number[];

    clickShake: () => void;
    addPasiveMilfos: (amount: number) => void;
    buyBooster: (booster_id: number, cost: number, MPC: number) => boolean;
    buyDrop: (drop_id: number, cost: number, MPS: number) => boolean;
    resetGame: () => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            milfos: 0,
            purchasedBoosters: [],
            purchasedDrops: [],

            clickShake: () => set((state) => ({milfos: state.milfos + 1,})),

            addPasiveMilfos: (amount) => set((state) => ({milfos: state.milfos + amount})),

            buyBooster: (booster_id, cost, MPC) => {
                const {milfos, purchasedBoosters} = get();

                if (milfos >= cost){
                    set({
                        milfos: milfos - cost,
                        purchasedBoosters: [...purchasedBoosters, booster_id]

                    })
                    return true;
                }
                return false;
            },

            buyDrop: (drop_id, cost) => {
                const {milfos, purchasedDrops} = get();

                if (milfos >= cost && !purchasedDrops.includes(drop_id)){
                    set({
                        milfos: milfos - cost,
                        purchasedDrops: [...purchasedDrops, drop_id]
                    })
                    return true;
                }
                return false;
            },

            resetGame: () => set({
                milfos: 0,
                purchasedBoosters: [],
                purchasedDrops: [],
            })
            
        }),
        {
            name: 'milfshakes-game-clicker',
            storage: createJSONStorage(() => localStorage),
        }
    )
)