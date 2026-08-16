
import { useGameStore } from '@/store/useGameStore';

export default function StatsButton() {
    const totalLevels = useGameStore((state) => state.totalLevels);
    const MPS = useGameStore((state) => state.MPS());
    const MPC = useGameStore((state) => state.MPC());

    return(
        <button onClick={() => console.log("Total Levels: ", totalLevels, "MPS: ", MPS, "MPC: ", MPC)} className="text-white px-4 py-2 rounded-md">
            Stats
        </button>
    )
}