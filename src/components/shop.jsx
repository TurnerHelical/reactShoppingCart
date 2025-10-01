import '../styles/shop.css'
import { useOutletContext } from 'react-router'
import { useState } from 'react';


function Shop() {
    const {itemArray, quantityClick, inCart, cartSubtotal} = useOutletContext();
    const [cartOpen, setCartOpen] = useState(false);


    return (
        <>
            <div id='shopContentCtr'>
               
                
                <h2 id='shopTitle'>Check out our stuff!</h2>
                <div id="productCardCtr" >
                    {itemArray.map((i,index) => (
                    <div className="productCard" key={i.name}>
                        <img className='productImg' src={i.image} alt={i.name}/>
                        <div className="productInfo">
                            <h3 className="productName" data-full={i.name}><span className="productName__text">{i.name}</span></h3>
                            <p className="productPrice">${Number(i.price).toFixed(2)}</p>
                            <p className="productQuant">{i.quantity} in cart</p>
                            <div className='btnCtr'>
                                <button className='cardBtn' onClick={() => quantityClick(index, +1)}>+</button>
                                <button className='cardBtn' onClick={() => quantityClick(index, -1)}>-</button>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
                <div id='cartCtr'>
                    <img id='cartIcon' src='https://www.freeiconspng.com/uploads/basket-cart-icon-27.png' onClick={() => setCartOpen(!cartOpen)}/>
                    <div id='cartAside' className={`${cartOpen ? 'open' : ''}`}>
                        <h3>Cart</h3>
                        <div id='cartContents'>
                            {inCart.map((i) => {

                                    return (
                                        <div>
                                            {i.name}
                                            <br></br>
                                            {i.quantity}
                                            <br></br>
                                            ${(i.quantity * i.price).toFixed(2)}
                                        </div>
                                    )
                                })
                            }
                            
                            ${cartSubtotal}
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop

