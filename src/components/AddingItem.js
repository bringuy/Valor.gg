import React from 'react'
import ItemForm from './Adding_Item_Components/ItemForm'
import ItemModal from './Adding_Item_Components/ItemModal'


function AddingItem (){
    return(
        <div className = 'container'>
            <ItemForm/>
            <ItemModal/>
        </div>
    )
}
export default AddingItem