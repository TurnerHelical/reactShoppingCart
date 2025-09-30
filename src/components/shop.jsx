import '../styles/shop.css'
import { useEffect, useState } from 'react';


const Shop = () => {
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

    return (
        <>
            <div id='shopContentCtr'>
                
                <h2 id='shopTitle'>Check out our stuff!</h2>
                <div id="productCardCtr" >
                    {itemArray.map((i) => (
                    <div className="productCard" key={i.name}>
                        <img className='productImg' src={i.image} alt={i.name}/>
                        <div className="productInfo">
                            <h3 className="productName" data-full={i.name}><span className="productName__text">{i.name}</span></h3>
                            <p className="productPrice">${i.price}</p>
                            <p className="productQuant">{i.quantity} in cart</p>

                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop