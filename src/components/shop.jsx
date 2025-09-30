import '../styles/shop.css'

const Shop = () => {
    return (
        <>
            <div id='shopContentCtr'>
                
                <h2 id='shopTitle'>Check out our stuff!</h2>
                <div id="productCardCtr">
                    <div className="productCard">
                        <img className='productImg' src="#" />
                        <div className="productInfo">
                            <h3 className="productName">Product Name Here</h3>
                            <p className="productPrice">Price here</p>
                            <p className="productQuant">How many in cart</p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop