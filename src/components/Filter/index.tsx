'use client'
import styles from './styles.module.scss'
import { useState } from 'react'
import { Tab, Item } from './types'
import Tabs from './tabs'
import MenuItems from './items'

type FilterProps = {
  tabs: Tab[];
  onTabSelect: (id: string) => void;
}

type ItemProps = {
  items: Item[],
  currentTab: string,
}

const Filter = ({tabs, onTabSelect}: FilterProps) => {
  return(
    <Tabs tabs={tabs} onSelect={onTabSelect} />
  )
}

export default Filter

export const FilterItems = ({ items, currentTab }: ItemProps) => {
  const filteredItems = items.filter(item => item.category === currentTab);

  return (
    <MenuItems items={filteredItems} />
  );
};
