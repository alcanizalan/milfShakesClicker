import styles from './FallingShake.module.css'
import Image from 'next/image';
import { motion } from "motion/react"
import { useMemo } from 'react';

import { useGameStore } from '@/store/useGameStore';

export default function FallingShake(){

    const totalLevels = useGameStore((state) => state.totalLevels);
    let visibleShakesCount = 0;
    if(totalLevels % 5 === 0 && totalLevels > 0){
        visibleShakesCount += 1;
    }

    const maxShakeSize = totalLevels >= 40*5 ? (totalLevels-40*5)/10+1 : 0.8;

    const config = useMemo(() => {
        return{
            left: `${(Math.random() * 85 + 5).toFixed(2)}%`,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            scale: Math.random() * 0.4 + maxShakeSize,

        }
    }, [visibleShakesCount]);

    return(
        <motion.div style={{left: config.left, scale: config.scale}} animate={{y: [-50, 700], rotate: 360}} transition={{duration: config.duration, delay: config.delay, repeat: Infinity, ease: 'linear'}} className={styles.fallingShake}>
            <Image src="/points/mpoints.png" alt="Falling Shake" className={styles.fallingShakeImg} width={50} height={50} />
        </motion.div>
    )
}