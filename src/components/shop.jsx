import '../styles/shop.css'
import { useOutletContext } from 'react-router'


const Shop = () => {
    const {itemArray, quantityClick} = useOutletContext();
    

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
            </div>
        </>
    )
}

export default Shop