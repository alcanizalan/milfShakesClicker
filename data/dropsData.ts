
import imageDrop1 from '../public/drops/drops_1.png'
import imageDrop2 from '../public/drops/drops_2.png'
import imageDrop3 from '../public/drops/drops_3.png'
import imageDrop4 from '../public/drops/drops_4.png'
import imageDrop5 from '../public/drops/drops_5.png'
import imageDrop6 from '../public/drops/drops_6.png'
import imageDrop7 from '../public/drops/drops_7.png'

import {DropType} from '../types/game'

export const drops: DropType[] = [
    { //drop 1
        name: "001 - Hot Milfs", 
        cost: 100, 
        autoGain: 0.5, 
        active: false, 
        level: 0,
        image: imageDrop1,
    },
    { //drop 2
      name: "002 - Cherry Shoes", 
      cost: 1000, 
      autoGain: 6, 
      active: false, 
      level: 0,
      image: imageDrop2,
    },
    { //drop 3
      name: "003 - Air Wish", 
      cost: 8000, 
      autoGain: 32, 
      active: false, 
      level: 0, 
      image: imageDrop3
    },
    { //drop 4
      name: "004 - Milfo", 
      cost: 22000, 
      autoGain: 102, 
      active: false, 
      level: 0, 
      image: imageDrop4
    },
    { //drop 5
      name: "005 - Skate", 
      cost: 114000, 
      autoGain: 564, 
      active: false, 
      level: 0, 
      image: imageDrop5
    },
    { //drop 6
      name: "006 - ESSNTLS", 
      cost: 1800000, 
      autoGain: 1660, 
      active: false, 
      level: 0, 
      image: imageDrop6
    },
    { //drop 7
      name: "007 - Casco Malamanera", 
      cost: 21000000, 
      autoGain: 12210, 
      active: false, 
      level: 0, 
      image: imageDrop7
    },
]