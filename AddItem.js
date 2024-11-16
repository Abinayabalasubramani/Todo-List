import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem= ({newItem, setNewItem, handleSubmit}) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input 
            autoFocus 
            id='addItems'
            type="text"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <buttton
               type='submit'
               aria-label='Add Item'
               >
                <FaPlus />
               </buttton>
        </form>
    )
}
export default AddItem