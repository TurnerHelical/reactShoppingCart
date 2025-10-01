import './styles/App.css'
import Header from './components/header'
import { Outlet } from 'react-router'
import { useEffect, useState, useMemo } from 'react';


function App() {
  const [itemArray, setItemArray] = useState([]);
    

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    };

    (async () => {
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
        console.error('error', err);
      }
    })();
  }, []);

  const inCart = useMemo(
    () => itemArray.filter((it) => it.quantity > 0),
    [itemArray]
  );

  const cartSubtotal = useMemo(
    () => itemArray.reduce((sum, it) => sum + Number(it.price) * it.quantity, 0),
    [itemArray]
  );

  const quantityClick = (idx, delta) => {
    setItemArray((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const newQty = Math.max(0, item.quantity + Number(delta));
        return { ...item, quantity: newQty };
      })
    );
  };    
  return (
    <>
      <Header />
      <main>
        <Outlet
        context={{
          itemArray,
          inCart,
          quantityClick,
          cartSubtotal,
        }} />
      </main>
      
    </>
  )
}

export default App
