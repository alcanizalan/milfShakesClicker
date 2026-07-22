import Drop from './ui/DropButton'

import { dropsData } from '../data/dropsData'

import { thousandSuffixes } from '../utils/suffixes'
import { formatMilfos } from '../utils/formatMilfos'
import { useGameStore } from '@/store/useGameStore'

import styles from './DropSection.module.css'

export default function DropsSection () {
  const drops = useGameStore((state) => state.drops)
  const buyOrUpdateDrop = useGameStore((state) => state.buyDrop)


  return (
    <section className={styles.sectionDrops}>
      {
        drops.map((drop, key) => (
          <Drop
            key={key}
            dropId={drop.drop_id}
            dropName={drop.name}
            dropImage={drop.image}
            dropCost={drop.cost}
            dropActive={drop.active}
            dropLevel={drop.level}
            buyOrUpdateDrop={() => buyOrUpdateDrop(key)}
            />
        ))
      }
    </section>
  );
}