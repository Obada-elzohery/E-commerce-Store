import './App.css';
import Products from './components/Products';
import Categories from './components/Categories';
import storeContext from './hooks/storeContext';
import {useState } from 'react';
import Cart from './components/Cart';

export default function App() {
  const [filter , setFilter] = useState("/products?populate=*");
  const [selectedCategories, setSelectedCategories] = useState([]);





  return (
    <>
    <Cart />
    <storeContext.Provider 
    value={{
        filter,setFilter,
        selectedCategories, setSelectedCategories,
      }}
      >
      <Categories />
       <Products />
    </storeContext.Provider>
    </>
  )
}

