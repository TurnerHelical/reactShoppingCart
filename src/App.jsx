import './styles/App.css'
import Header from './components/header'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react';


function App() {
  const [itemArray, setItemArray] = useState([])

    const getData = async() => {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    }

    useEffect(() => {
        const load = async () => {
            try {
              const items = await getData();
              const prodArray = items.slice(0, 9).map(({ title, image, price }) => ({
                name: title,
                image,
                price,
                quantity: 0,
              }));
              setItemArray(prodArray);
            } catch (err) {
              console.error("error", err);
            }
          };
      
          load();
        }, []);

    const quantityClick = (idx, math) => {
        setItemArray(prev =>
            prev.map((item, i) =>
              i === idx
                ? { ...item, quantity: Math.max(0, item.quantity + math) }
                : item
            )
          );
        };       
  return (
    <>
      <Header />
      <main>
        <Outlet
        context={{
          itemArray,
          quantityClick,
        }} />
      </main>
      
    </>
  )
}

export default App
