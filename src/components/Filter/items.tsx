import { Item } from "./types";

type ItemsProps = {
  items: Item[]
}

const MenuItems = ({items}: ItemsProps) => {
  return(
    <>
      {items.map(item => (
        <div key={item.id}>{item.name}{item.description}</div>
      ))}
    </>
  )
}

export default MenuItems