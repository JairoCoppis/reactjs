
import { Contador } from './Contador'


export const ItemDetail = ({item}) => {
  const onAdd = (qty) => console.log(qty)
  return (
    <div>
       <img src={item.img} alt={item.title} />
            <div>
                <h2>{item.title}</h2>
                <p>
                    {item.description}
                </p>
                <h3>{item.price}</h3>
        <Contador stock={item.stock} onAdd={onAdd}/>
        </div>
    </div>
  )
}

