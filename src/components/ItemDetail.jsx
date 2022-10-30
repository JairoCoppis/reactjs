
import { Contador } from './Contador'
import { Item } from './Item'

export const ItemDetail = () => {
  return (
    <div>
        <Item/>
        <Contador stock={10}/>
    </div>
  )
}

