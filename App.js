import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Content from './Content.js';
import Footer from './Footer.js';
import create from './create.js';
import AddItem from './AddItem.js';
import SearchItem from "./SearchItem.js";
function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice Coding" },
    { id: 2, checked: false, item: "Play" },
    { id: 3, checked: true, item: "Read About AI" }
  ]);
  
  const [newItem, setNewItem] = useState('');
  const [search, setSearch]=useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
  
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <Header title="Abi" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
         search={search}
         setSearch={setSearch}
      /> 
      <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
