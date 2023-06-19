import { useState } from "react";
import Form from "./Form";
import Items from './Items';
import { nanoid } from 'nanoid'

document.addEventListener("touchstart", function () { }, true);

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')




function App() {
  const [items, setItems] = useState(defaultList)


  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems)
  }

  const deleteItem = (itemID) => {
    const newItems = items.filter((item) => item.id !== itemID);
    setItems(newItems);
    setLocalStorage(newItems)
  }


  return (
    <div className="page-center">
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} />
    </div>
  )
}

export default App
