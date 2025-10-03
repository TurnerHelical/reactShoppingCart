import logoNoName from '../assets/groceryLogoWithNoName.png'
import { NavLink } from 'react-router';
import '../styles/header.css';


const Header = () => {

    return (
        <header>
            <div id='titleDiv'>
                <img id='titleImg' src={logoNoName}/>
                <h1>Odin's Storefront</h1>
            </div>
            <nav>
                <NavLink to='/' className={({isActive}) => `navLink ${isActive ? 'active' : ''}`} end>Home</NavLink>
                <NavLink to='/shop' className={({isActive}) => `navLink ${isActive ? 'active' : ''}`} end>Shop</NavLink>
                <NavLink to='/cart' className={({isActive}) => `navLink ${isActive ? 'active' : ''}`} end>Cart</NavLink>

            </nav>
        </header>
    )
}
export default Header