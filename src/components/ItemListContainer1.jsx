import {Button} from "./Button"
import { ItemListContainer } from "./ItemListContainer"

export const ItemListContainer1 = () => {

    return (
        
        <div className="cards">
            <div>
            <ItemListContainer/>
            </div>
            
            <Button text="Comprar"/>
        </div>
        
    ) 
}