import { Item } from '@/components/Filter/types'
import Card from '@/components/Card'
import CardBody from '@/components/Card/CardBody'
import CardTitle from '@/components/Card/CardTitle'
import CardMeta from '@/components/Card/CardMeta'
import styles from "@/components/Card/styles.module.scss"

const MenuItemCard = ({items, basket, orderButtonAction}: { items: Item[], basket?: boolean, orderButtonAction?: (item: any) => void }) => {

  return(
    <>
      {items.map(item => (
        <Card key={item.id} shadow='soft' id={item.name.replace(/\s/g, '%20')}>
          <CardBody>
            <CardTitle title={item.name} orderTitle={basket} size='small' orderButtonAction={() => orderButtonAction && orderButtonAction(item)} />
            <p>{item.description}</p>
            <CardMeta border="top" justify="space-between">
              <span className={styles.metaSmallText}>{item.calories}</span>
              <span className={styles.metaLargeText}><strong>£{Number(item.price).toFixed(2)}</strong></span>
            </CardMeta>
          </CardBody>
        </Card>
      ))}
    </>
  )
}

export default MenuItemCard