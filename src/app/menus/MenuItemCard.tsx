import { Item } from '@/components/Filter/types'
import Card from '@/components/Card'
import CardBody from '@/components/Card/CardBody'
import CardTitle from '@/components/Card/CardTitle'
import CardMeta from '@/components/Card/CardMeta'
import styles from "@/components/Card/styles.module.scss"

type ItemsProps = {
  items: Item[]
}

const MenuItemCard = ({items}: ItemsProps) => {
  return(
    <>
      {items.map(item => (
        <Card key={item.id} shadow='soft' id={item.name}>
          <CardBody>
            <CardTitle title={item.name} size='small' />
            <p>{item.description}</p>
            <CardMeta border="top" justify="space-between">
              <span className={styles.metaSmallText}>{item.calories}</span>
              <span className={styles.metaLargeText}><strong>{item.price}</strong></span>
            </CardMeta>
          </CardBody>
        </Card>
      ))}
    </>
  )
}

export default MenuItemCard