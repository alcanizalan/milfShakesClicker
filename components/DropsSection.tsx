import Drop from './ui/DropButton.jsx'
import { thousandSuffixes } from '../utils/suffixes.js'
import { formatCost } from '../utils/formatCost.js'

import useDrops from '../hooks/old.useDrops.js'
import useTimer from '../hooks/old.useTimer.js'

import './DropsSection.css'

export default function DropsSection ({milfoPoints, setMilfoPoints}) {
  const { drops } = useDrops(milfoPoints, setMilfoPoints);


  return (
    <section className='sectionDrops'>
      {
        drops.map((drop, key) => (
          <Drop
            key={key}
            dropImage={drop.dropImg}
            dropName={drop.name}
            dropCost={drop.cost}
            dropAutoGain={drop.autoGain}
            dropActive={drop.active}
            dropLevel={drop.level}
            thousandSuffixes={thousandSuffixes}
            formatCost={formatCost}
            onClick={() => handleClickDrop(key)}
          />
        ))
      }
    </section>
  );
}