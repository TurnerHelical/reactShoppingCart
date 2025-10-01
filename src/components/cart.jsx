import { useOutletContext } from "react-router"

const Cart = () => {
    const {itemArray, quantityClick} = useOutletContext();
    return (
        <>
        <p>cart page</p></>
    )
}

export default Cart