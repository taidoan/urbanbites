'use client'
import { Tab } from './types'
import Tabs from './tabs'

type FilterProps = {
  tabs: Tab[];
  onTabSelect: (id: string) => void;
}

const Filter = ({tabs, onTabSelect}: FilterProps) => {

  return(
    <Tabs tabs={tabs} onSelect={onTabSelect} />
  )
}

export default Filter
