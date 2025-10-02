import { useOutletContext } from "react-router";
import "../styles/cart.css";

const Cart = () => {
  const { quantityClick, inCart, cartSubtotal } = useOutletContext();

  return (
    <div id="checkoutPageCtr">
      <h2>Cart</h2>
      <div id="checkoutPageItemCtr">
      {inCart.length === 0 ? (
                <p id="emptyCart">Cart is Empty</p>
              ) : (
                <>
        {inCart.map((i) => {
          return (
            <div className="checkoutItemLine" key={i.id}>
              <div className="itemImgCtr">
                <img src={i.image} className="itemImg" />
              </div>
              <div className="itemNameCtr">
                <h4>{i.name}</h4>
              </div>
              <div className="itemQuantityCtr">
                <p>{i.quantity}</p>
                <div>
                  <button
                    className="cardBtn"
                    onClick={() => quantityClick(i.id, +1)}
                  >
                    +
                  </button>
                  <button
                    className="cardBtn"
                    onClick={() => quantityClick(i.id, -1)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="itemPriceCtr">
                <p>${(i.price).toFixed(2)}</p>
              </div>
              <div className="totalPriceCtr">
                <p>${(i.price * i.quantity).toFixed(2)}</p>
              </div>
            </div>
          );
          
              })}
              </>
              )}
      </div>
      <div id="checkoutFooter">
        <button id="clearCart">Clear Cart</button>
        <p id="cartTotal">Final Price: ${(cartSubtotal).toFixed(2)}</p>

      </div>
    </div>
  );
};

export default Cart;
