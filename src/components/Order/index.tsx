import Button from "../Button"
import style from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"

const OrderBar = () => {
  return (
    <div className={style.orderBar}>
      <BasketButton />
    </div>
  )
}

const BasketButton = () => {
  return (
    <div className={style.basketButton}>
      <div className={style.basketButtonText}>
        <span className={style.basketLabel}>Basket:</span>
        <span>(£9.99)</span>
      </div>
      <span className={style.basketButtonIcon}>
        <span className={style.basketItemCount}>1</span>
        <FontAwesomeIcon icon={faBasketShopping} />
      </span>
    </div>
  )
}

export default OrderBar