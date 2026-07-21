  
import { useState } from 'react'
import { drops as initialDrops } from '../data/dropsData.js'
  
export function useDrops() {
  const [drops, setDrops] = useState(initialDrops);

  const handleClickDrop = (index) => {
    const newDrops = [...drops];
    if (!newDrops[index].active && newDrops[index].cost <= milfoPoints) { 
      setMilfoPoints(milfoPoints - drops[index].cost);
      newDrops[index].active = true;
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDrops(newDrops);
    }else if (newDrops[index].active && newDrops[index].cost <= milfoPoints) {
      setMilfoPoints(milfoPoints - newDrops[index].cost);
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDrops(newDrops);
    } 
  };
}
